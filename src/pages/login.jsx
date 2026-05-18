import LeftPart from "../components/Login/LeftPart";

export default function Login() {
  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <LeftPart />
      <div className="hidden lg:block" />
    </main>
  );
}
