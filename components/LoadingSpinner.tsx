export default function LoadingSpinner() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-12">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="mt-2 text-gray-600">Loading restaurants...</p>
      </div>
    </div>
  )
}