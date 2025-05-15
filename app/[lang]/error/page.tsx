export const revalidate = 60;

export default async function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-4">500 - Internal Server Error</h1>
      <p className="mb-4">Oops! Something went wrong on our end. Please try again later.</p>
    </div>
  );
}
