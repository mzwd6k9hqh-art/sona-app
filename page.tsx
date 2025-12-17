import { WhopApp } from "@whop-apps/sdk";

export default async function Home() {
  const whop = new WhopApp({
    apiKey: process.env.WHOP_API_KEY!,
    appId: process.env.NEXT_PUBLIC_WHOP_APP_ID!,
  });

  // 🔹 جلب المنتجات
  const products = await whop.products.list();

  // 🔹 جلب الأعضاء
  const members = await whop.members.list();

  return (
    <main style={{ padding: 24 }}>
      <h1>Sona Creator Control</h1>

      <div style={{ marginTop: 20 }}>
        <h2>📦 Products</h2>
        <p>Total products: {products.data.length}</p>
      </div>

      <div style={{ marginTop: 20 }}>
        <h2>👥 Members</h2>
        <p>Total members: {members.data.length}</p>
      </div>
    </main>
  );
}
