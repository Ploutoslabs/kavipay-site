import { motion } from 'motion/react';
import PDFViewer from '../components/PDFViewer';

export default function KavipayKYCPolicyPage(): JSX.Element {
  const pdfPath = '/documents/Kavipay_KYC_Policy.pdf';

  return (
    <motion.div
      className="w-full min-h-screen bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <PDFViewer
        title="Kavipay KYC Policy"
        pdfPath={pdfPath}
      />
    </motion.div>
  );
}
