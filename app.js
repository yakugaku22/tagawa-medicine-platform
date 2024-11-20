// サンプルの薬データ
const medicineData = {
    "頭痛": ["イブプロフェン", "アセトアミノフェン", "ロキソプロフェン"],
    "発熱": ["パラセタモール", "イブプロフェン"],
    "咳": ["デキストロメトルファン", "ブロムヘキシン"]
};

// フォームの送信イベントを監視
document.getElementById('symptom-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ページリロードを防止

    const symptom = document.getElementById('symptom').value;
    const medicineList = document.getElementById('medicine-list');
    medicineList.innerHTML = ''; // 前回の結果をクリア

    if (medicineData[symptom]) {
        // 症状に対応する薬を表示
        medicineData[symptom].forEach(function(medicine) {
            const listItem = document.createElement('li');
            listItem.textContent = medicine;
            medicineList.appendChild(listItem);
        });
    } else {
        // 該当する薬がない場合
        const listItem = document.createElement('li');
        listItem.textContent = '該当する薬が見つかりません。';
        medicineList.appendChild(listItem);
    }
});
