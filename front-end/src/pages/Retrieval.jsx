import DashboardLayout from "../layouts/DashboardLayout";

export default function Retrieval() {

    function submitQuery() {
        const query = document.getElementById('queryInput').value;
        if (!query.trim()) {
            alert("Silakan masukkan query!");
            return;
        }

        fetch('http://localhost:5000/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: query })
        })
            .then(response => response.json())
            .then(data => {
                const resultDiv = document.getElementById('results');

                if (data.results.length === 0) {
                    resultDiv.innerHTML += "<p class='text-red-500'>Tidak ditemukan hasil relevan.</p>";
                    return;
                }

                data.results.forEach(item => {
                    resultDiv.innerHTML += `
                                        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg shadow-[0_0_2px_#0f114c] mb-4">
                                            <div class="text-sm text-gray-800">
                                                <p class="font-medium text-[#0f114c]">Title:</p>
                                                <p>${item.titles}</p>
                                                <p class="font-medium text-[#0f114c]">Abstract:</p>
                                                <p class="line-clamp-3 max-w-[600px]">${item.summaries}</p>
                                            </div>
                                            <div class="text-sm text-gray-600 mt-2 sm:mt-0 sm:text-right">
                                                <p class="font-medium">Similarity Percentage:</p>
                                                <p>${(item['Similarity Score'] * 100).toFixed(2)}%</p>
                                            </div>
                                        </div>
            `;
                });
            })
            .catch(error => {
                console.error('Terjadi kesalahan:', error);
                alert('Gagal mengambil data. Pastikan server backend sedang berjalan.');
            });
    }
    return (
        <DashboardLayout
            title="Search Engine"
            header="Search Engine"
            description="Abstract Similarity Analysis Based Retrieval System on Research Papers in arXiv with Latent Semantic Analysis">
            <div className="bg-white p-4 shadow rounded-lg sm:p-8 flex flex-col gap-5 pt-10">


                <div class="mb-2">
                    <label for="success" className="block mb-2 text-xl font-medium text-[#0f114c]">Query</label>
                    <input type="text" id="queryInput" class="bg-white border border-[#0f114c] text-[#0f114c] placeholder-[#0f114c] text-sm rounded-lg focus:ring-[#0f114c] focus:border-[#0f114c] block w-1/2 p-2.5" placeholder="Please input a query" />
                </div>
                <div className="flex flex-row items-center gap-2">
                    <button
                        onClick={submitQuery}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none max-w-fit">
                        Submit
                    </button>
                    <a href="/search-engine" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none max-w-fit">
                        Refresh
                    </a>
                </div>
                <div class="container-result">
                    <div className="flex flex-col" id="results">
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}