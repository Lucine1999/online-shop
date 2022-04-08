function filterProductList(arr, typeArr) {
    let newArr = [];
    arr = arr.map((e) => {
        typeArr.map((t) => {

            if (e.category_id === t) {
                newArr.push(arr[arr.indexOf(e)])
            }
        })

    })
    
    return newArr;
}

export default filterProductList;