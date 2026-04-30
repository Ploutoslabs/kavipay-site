import { useState } from 'react';
import { ChevronDown, Download, X } from 'lucide-react';
import { motion } from 'motion/react';

interface PDFViewerProps {
  title: string;
  pdfPath: string;
  pdfFile?: string;
}

export default function PDFViewer({ title, pdfPath, pdfFile }: PDFViewerProps) {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = pdfFile || pdfPath;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* PDF Viewer Container */}
      <motion.div
        className={`${
          isFullscreen
            ? 'fixed inset-0 z-50 bg-black'
            : 'relative w-full h-screen bg-gradient-to-br from-black via-slate-900 to-black'
        }`}
        initial={isFullscreen ? { opacity: 0 } : {}}
        animate={isFullscreen ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        {/* Header */}
        {!isFullscreen && (
          <div className="bg-black border-b border-white/10 sticky top-0 z-10 backdrop-blur-md bg-black/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
              <motion.h1
                className="text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                {title}
              </motion.h1>
              <div className="flex items-center gap-3">
                <motion.button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline text-sm">Download</span>
                </motion.button>
                <motion.button
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronDown className="w-4 h-4 rotate-45" />
                  <span className="hidden sm:inline text-sm">Fullscreen</span>
                </motion.button>
              </div>
            </div>
          </div>
        )}

        {/* Fullscreen Header */}
        {isFullscreen && (
          <motion.div
            className="absolute top-0 right-0 z-50 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              onClick={() => setIsFullscreen(false)}
              className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white/80 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}

        {/* PDF Container */}
        <div className={`${isFullscreen ? 'w-full h-full' : 'w-full h-[calc(100vh-80px)]'}`}>
          <motion.iframe
            key={isFullscreen ? 'fullscreen' : 'normal'}
            src={pdfFile || pdfPath}
            className="w-full h-full border-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          />
        </div>
      </motion.div>
    </>
  );
}
