import { useEffect, useState } from "react";
import { useRegisterSW } from "virtual:pwa-register/react";

export function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  const {
    offlineReady: [offlineReady, setOfflineReady],
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered(r) {
      console.log("SW Registered: " + r);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  const handleUpdateClick = () => {
    updateServiceWorker(true);
  };

  return (
    <>
      {(offlineReady || needRefresh) && (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
          {offlineReady && (
            <div className="rounded-lg bg-green-500 px-6 py-3 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <span>App pronto para uso offline</span>
                <button
                  onClick={() => setOfflineReady(false)}
                  className="ml-2 rounded px-2 py-1 text-sm hover:bg-green-600"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
          {needRefresh && (
            <div className="rounded-lg bg-blue-500 px-6 py-3 text-white shadow-lg">
              <div className="flex items-center gap-3">
                <span>Nova versão disponível</span>
                <button
                  onClick={handleUpdateClick}
                  className="ml-2 rounded bg-white px-3 py-1 text-sm text-blue-500 hover:bg-gray-100"
                >
                  Atualizar
                </button>
                <button
                  onClick={() => setNeedRefresh(false)}
                  className="rounded px-2 py-1 text-sm hover:bg-blue-600"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {showInstallButton && (
        <div className="fixed bottom-4 left-4 z-50">
          <button
            onClick={handleInstallClick}
            className="rounded-lg bg-[#7B4633] px-6 py-3 text-white shadow-lg transition-all hover:bg-[#8F4C37]"
          >
            Instalar App
          </button>
        </div>
      )}
    </>
  );
}

