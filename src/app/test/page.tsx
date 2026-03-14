export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-wide py-16">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Test Page - Salted Soul
        </h1>
        <p className="text-lg text-gray-600 text-center mb-8">
          This is a simple test page to check if basic components are working.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Card 1</h3>
            <p>Basic styling test</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Card 2</h3>
            <p>Grid layout test</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Card 3</h3>
            <p>CSS classes test</p>
          </div>
        </div>
      </div>
    </div>
  )
}