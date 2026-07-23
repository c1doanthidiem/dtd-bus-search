function removeVietnameseTones(s){
    return (s||'')
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .replace(/đ/g,'d')
        .replace(/Đ/g,'D')
        .toLowerCase()
}

function searchBus(k){
    k=removeVietnameseTones(k);
    return window.busData.filter(i=>
        removeVietnameseTones(i.diemDon).includes(k) ||
        removeVietnameseTones(i.tuyen).includes(k) ||
        removeVietnameseTones(i.giaoVien).includes(k)
    );
}
