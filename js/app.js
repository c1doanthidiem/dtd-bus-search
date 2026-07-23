const input = document.getElementById("keyword");
const result = document.getElementById("result");
const count = document.getElementById("count");

function render(list) {
    count.innerHTML = `Tìm thấy <b>${list.length}</b> điểm đón`;
    if (list.length === 0) {
        result.innerHTML = `
            <div class="empty">
                <h2>🔍 Không tìm thấy kết quả</h2>
                <p>Vui lòng thử từ khóa khác.</p>
            </div>
        `;
        return;
    }
    result.innerHTML = list.map(i => `
        <div class="card">
            <div class="card-top">
                <h2>🚌 ${i.tuyen || ''}</h2>
                <span class="position">${i.giaoVien || ''}</span>
            </div>

            <div class="card-body">
                <div class="item">
                    <div class="icon">📍</div>
                    <div>
                        <div class="label">Điểm đón</div>
                        <div class="value">${i.diemDon || ''}</div>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">🕐</div>
                    <div>
                        <div class="label">Giờ đón</div>
                        <div class="value">${i.gioDi || ''}</div>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">🏁</div>
                    <div>
                        <div class="label">Điểm trả</div>
                        <div class="value">${i.diemVe || ''}</div>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">🕓</div>
                    <div>
                        <div class="label">Giờ trả</div>
                        <div class="value">${i.gioVe || ''}</div>
                    </div>
                </div>

                <div class="item">
                    <div class="icon">📞</div>
                    <div>
                        <div class="label">Giám sát xe</div>
                        <div class="value">${i.giaoVien || ''}<br>${i.dienThoai || ''}</div>
                    </div>
                </div>
            </div>
        </div>
    `).join("");
}
render(window.busData || []);
input.addEventListener("input", () => {
    const keyword = input.value.trim();

    if (keyword === "") {
        render(window.busData || []);
        return;
    }

    render(searchBus(keyword));
});
