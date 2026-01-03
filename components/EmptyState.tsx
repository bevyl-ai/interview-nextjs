export default function EmptyState() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-12">
      <div className="text-center">
        <p className="text-lg text-gray-600 mb-2">No restaurants found</p>
        <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    </div>
  )
}