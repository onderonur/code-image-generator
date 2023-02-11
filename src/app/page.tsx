import Layout from '@/layout/Layout';
import Hero from '@/hero/Hero';
import ExportableEditor from '@/exportable-editor/ExportableEditor';

// TODO: License ekle educational purpose vs.

export default function Page() {
  return (
    <Layout>
      <Hero />
      <ExportableEditor />
    </Layout>
  );
}
