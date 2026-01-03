export default function ErrorState() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <h2 className="text-red-800 font-semibold">Error loading restaurants</h2>
          <p className="text-red-600">Please try again later.</p>
        </div>
      </div>
    </div>
  )
}