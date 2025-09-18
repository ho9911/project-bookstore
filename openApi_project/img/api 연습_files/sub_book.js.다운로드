

        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
        // $(function () {
        //     $.get("./sub_txt/txt1.txt", function (data) {
        //         $("#tmpBox").html(data);
        //     })

        // });

        const REST_API_KEY = '89edf79660aabccb608d9fb997506d28';

        async function bookData() {
            const REST_API_KEY = '7b2300fc6315bb65035d1a3c7b49b161';
            const params = new URLSearchParams({
                target: "title",
                query: "상상력사전"
            });
            
            const url = `https://dapi.kakao.com/v3/search/book?${params}`;

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `KakaoAK ${REST_API_KEY}`
                    }
                });

                if (!response.ok) {
                    throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
                }

                const data = await response.json();

                // 요소 선택
                const subBox = document.querySelector(".sub_box");
                const contextBox = document.querySelector(".contextbox");
                const priceNum = document.querySelector(".pricenum");

                // 데이터에서 필요한 값 추출
                const book = data.documents[0];
                const { title, thumbnail, authors, price, contents } = book;

                // 요소 생성 및 추가

                

                subBox.innerHTML = `<h3>${title}</h3>
                <img src="${thumbnail}">
                `
                priceNum.textContent += price + "원";

                contextBox.innerHTML = `<h6>${authors[0]}</h6>
                <p>${contents}</p>
                <span>자세히보기</span>
                `
            } catch (error) {
                console.log('에러발생', error);
            }
        }

        bookData();

        //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./sub_txt/txt1.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("tmpBox").innerHTML = data;

            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });
        document.addEventListener("DOMContentLoaded", async function () {
            try {
                const response = await fetch("./sub_txt/txt2.txt");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.text();
                document.getElementById("tmpBox2").innerHTML = data;

            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        });
        
