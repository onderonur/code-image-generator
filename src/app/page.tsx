import Layout from '@/layout/Layout';
import Hero from '@/hero/Hero';
import ExportableEditor from '@/exportable-editor/ExportableEditor';

export default function Page() {
  return (
    <Layout>
      <Hero />
      <ExportableEditor />
    </Layout>
  );
}
