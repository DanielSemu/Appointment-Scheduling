import Login from "../auth/Login";
import Register from "../auth/Register";


const MainContent = () => (
    <main className="pt-32 lg:pt-16 lg:pl-80 p-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Welcome</h2>
        <p>This is your main content area.</p>
        <Register/>
        <Login/>
      </div>
    </main>
  );
  
  export default MainContent;
  