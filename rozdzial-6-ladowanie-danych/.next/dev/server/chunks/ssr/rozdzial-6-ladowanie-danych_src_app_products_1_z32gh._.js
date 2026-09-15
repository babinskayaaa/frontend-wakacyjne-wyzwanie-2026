module.exports = [
"[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
async function addProduct(newProduct) {
    const res = await fetch("https://dummyjson.com/products/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    });
    if (!res.ok) {
        throw new Error("Nie udało się dodać produktu");
    }
    return res.json();
}
function AddProductForm() {
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: addProduct,
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey: [
                    "products"
                ]
            });
            setTitle("");
            setPrice("");
            setCategory("");
        }
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!title || !price || !category) return;
        mutation.mutate({
            title,
            price: Number(price),
            category
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "border p-4 rounded-lg bg-card mb-8 space-y-4 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold",
                children: "Dodaj nowy produkt"
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-3 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Tytuł produktu",
                        value: title,
                        onChange: (e)=>setTitle(e.target.value),
                        className: "border rounded px-3 py-2 text-sm bg-background",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        placeholder: "Cena",
                        value: price,
                        onChange: (e)=>setPrice(e.target.value),
                        className: "border rounded px-3 py-2 text-sm bg-background",
                        required: true,
                        min: "0",
                        step: "0.01"
                    }, void 0, false, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Kategoria",
                        value: category,
                        onChange: (e)=>setCategory(e.target.value),
                        className: "border rounded px-3 py-2 text-sm bg-background",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: mutation.isPending,
                className: "px-4 py-2 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 disabled:opacity-50 transition-colors",
                children: mutation.isPending ? "Dodawanie..." : "Dodaj produkt"
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            mutation.isSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-green-600",
                children: "Produkt został pomyślnie wysłany!"
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                lineNumber: 67,
                columnNumber: 9
            }, this),
            mutation.isError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-red-600",
                children: [
                    "Błąd: ",
                    mutation.error.message
                ]
            }, void 0, true, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
                lineNumber: 70,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
}),
"[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductsList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$src$2f$app$2f$products$2f$AddProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/rozdzial-6-ladowanie-danych/src/app/products/AddProductForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
async function fetchProducts(search) {
    const url = search.trim() ? `https://dummyjson.com/products/search?q=${encodeURIComponent(search.trim())}` : "https://dummyjson.com/products";
    const res = await fetch(url);
    if (!res.ok) throw new Error("Błąd podczas pobierania produktów");
    return res.json();
}
function ProductsList({ initialData }) {
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const { data, isLoading, isFetching, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            "products",
            search
        ],
        queryFn: ()=>fetchProducts(search),
        initialData: search === "" ? initialData : undefined,
        staleTime: 60_000
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$src$2f$app$2f$products$2f$AddProductForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Szukaj produktów...",
                        value: search,
                        onChange: (e)=>setSearch(e.target.value),
                        className: "border rounded px-4 py-2 w-full max-w-md bg-background text-sm"
                    }, void 0, false, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    isFetching && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground animate-pulse",
                        children: "Aktualizacja..."
                    }, void 0, false, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                        lineNumber: 40,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: "Ładowanie produktów..."
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 43,
                columnNumber: 21
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-red-500",
                children: [
                    "Wystąpił błąd: ",
                    error.message
                ]
            }, void 0, true, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 44,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                children: data?.products.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border rounded-lg p-4 shadow-xs flex flex-col justify-between bg-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    product.thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: product.thumbnail,
                                        alt: product.title,
                                        className: "w-full h-48 object-cover rounded-md mb-3"
                                    }, void 0, false, {
                                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                                        lineNumber: 51,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg",
                                        children: product.title
                                    }, void 0, false, {
                                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-muted-foreground capitalize",
                                        children: product.category
                                    }, void 0, false, {
                                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-bold mt-3",
                                children: [
                                    "$",
                                    product.price
                                ]
                            }, void 0, true, {
                                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this)
                        ]
                    }, product.id, true, {
                        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            data?.products.length === 0 && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$rozdzial$2d$6$2d$ladowanie$2d$danych$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-muted-foreground mt-4",
                children: "Nie znaleziono żadnych produktów."
            }, void 0, false, {
                fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/rozdzial-6-ladowanie-danych/src/app/products/ProductsList.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=rozdzial-6-ladowanie-danych_src_app_products_1_z32gh._.js.map