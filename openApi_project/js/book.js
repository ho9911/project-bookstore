async function bookData() {
    const params = new URLSearchParams({
        target: "title",
        query: "베르나르"
    });

    try {
        const response = await fetch(`https://dapi.kakao.com/v3/search/book?${params}`, {
            method: 'GET',
            headers: {
                Authorization: "KakaoAK 7b2300fc6315bb65035d1a3c7b49b161"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)

        // .box 요소 전체 선택
        const boxElements = document.querySelectorAll(".today .swiper-slide");

        // documents 데이터를 각 box에 대응하여 렌더링
        boxElements.forEach((box, i) => {
            const doc = data.documents[i];

            if (!doc) return; // 데이터가 부족할 경우 생략

            // <img>
            const img = document.createElement("img");
            img.src = doc.thumbnail;
            box.appendChild(img);

            // <h3> 제목
            const h3 = document.createElement("h3");
            h3.textContent = doc.title;
            box.appendChild(h3);

            // <h6> 저자
            const h6 = document.createElement("h6");
            h6.textContent = doc.authors;
            box.appendChild(h6);

            // <p> 내용 일부
            // const p = document.createElement("p");
            // p.textContent = doc.contents.substring(0, 60);
            // box.appendChild(p);

            // <button>
            const btn = document.createElement("button");
            btn.textContent = "click";
            box.appendChild(btn);
        });

    } catch (error) {
        console.log('에러발생', error);
    }
}

bookData();