async function fetchBooks(query) {
            const params = new URLSearchParams({
                target: "title",
                query,
                size: 10
            });
            const url = `https://dapi.kakao.com/v3/search/book?${params}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: "KakaoAK 89edf79660aabccb608d9fb997506d28"
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP 오류: ${response.status}`);
            }

            return response.json();
        }

        async function bookData() {
            try {
                // query와 section class를 매핑
                const queries = [
                    { query: "공존", sectionClass: ".toto" },
                    { query: "베르베르", sectionClass: ".today" },
                    { query: "추천", sectionClass: ".weekly" },
                    { query: "컴퓨터", sectionClass: ".hot" },
                    { query: "만화", sectionClass: ".pick" },
                    { query: "에세이", sectionClass: ".best" },
                    { query: "기욤", sectionClass: ".pop" },
                    { query: "한강", sectionClass: ".hotbook" },
                ];

                for (const { query, sectionClass } of queries) {
                    const data = await fetchBooks(query);

                    // 해당 섹션 내의 .box 요소 8개 선택
                    const section = document.querySelector(sectionClass);
                    const boxElements = section.querySelectorAll(".swiper-slide");

                    boxElements.forEach((box, i) => {
                        const doc = data.documents[i];
                        if (!doc) return;

                        box.innerHTML=`<a href="./subindex.html">
                        <img src="${doc.thumbnail}">
                        <div class="text">
                        <h3>${doc.title}</h3>
                        <h6>${doc.authors}</h6>
                        </div>
                        
                        </a>`

                        // <img>
                        // const img = document.createElement("img");
                        // img.src = doc.thumbnail;
                        // box.appendChild(img);

                        // const text = document.createElement("div");
                        // text.classList.add('text');

                        // // <h3> 제목
                        // const h3 = document.createElement("h3");
                        // h3.textContent = doc.title;
                        // text.appendChild(h3);

                        // // <h6> 저자
                        // const h6 = document.createElement("h6");
                        // h6.textContent = doc.authors;
                        // text.appendChild(h6);

                        // box.appendChild(text)

                        // <p> 내용 일부
                        // const p = document.createElement("p");
                        // p.textContent = doc.contents.substring(0, 60);
                        // box.appendChild(p);

                    
                    });
                }
            } catch (error) {
                console.error('에러 발생:', error);
            }}
        bookData();