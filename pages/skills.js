
export default function Skills() {
  return (
    <div className="min-h-screen px-6 py-20 text-center">
      <h1 className="text-4xl font-semibold mb-4">My Skills</h1>
      <div className="max-w-3xl mx-auto text-left text-gray-800">
        <h2 className="text-2xl font-bold mt-6 mb-2">💻 IT Support Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Troubleshooting hardware/software issues</li>
          <li>Microsoft 365, Active Directory</li>
          <li>Basic networking & device setup</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2">🧠 Learning Now</h2>
        <ul className="list-disc list-inside mb-4">
          <li>React & Next.js</li>
          <li>Automation tools</li>
          <li>Cloud platforms & AI integration</li>
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-2">🌱 Soft Skills</h2>
        <ul className="list-disc list-inside">
          <li>Empathy & tech training for users</li>
          <li>Clear documentation</li>
          <li>Team collaboration & initiative</li>
        </ul>
      </div>
    </div>
  );
}
