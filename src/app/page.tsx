import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="grid md:grid-cols-3 gap-8">
          {/* 价格卡片区域 */}
        </section>

        {/* Features Section */}
        <section className="py-16">
          {/* 功能列表 */}
        </section>

        {/* FAQ Section */}
        <section className="mt-16 max-w-4xl mx-auto">
          {/* 常见问题 */}
        </section>

        {/* CTA Section */}
        <section className="text-center py-16">
          {/* 行动号召 */}
        </section>
      </div>
    </main>
  );
}