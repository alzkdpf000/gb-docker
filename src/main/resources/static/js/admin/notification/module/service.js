const noticeService = (() => {

    // 공지 목록 조회
    const getList = async (callback, page = 1) => {
        try {
            const res = await fetch(`/api/admin/notices?page=${page}`);
            const data = await res.json();

            if (res.ok) {
                console.log("공지 목록 불러오기 성공");
                callback?.(data);
            } else {
                console.error("공지 목록 실패:", data);
            }
        } catch (err) {
            console.error("서버 통신 오류:", err);
        }
    };

    // 공지 작성
    const save = async (title, content) => {
        try {
            const res = await fetch("/api/admin/notices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
                credentials: "include",
            });

            console.log("[NOTICE SAVE] status:", res.status);

            if (res.status === 200 || res.status === 201 || res.status === 204) {
                return true;
            }

            const text = await res.text();
            console.error("공지 작성 실패 응답:", res.status, text);
            return false;
        } catch (err) {
            console.error("서버 오류:", err);
            return false;
        }
    };


    //  공지 상세 조회
    const getDetail = async (id) => {
        try {
            const res = await fetch(`/api/admin/notices/${id}`);
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            console.log("공지 상세 불러오기 성공:", data);
            return data;
        } catch (err) {
            console.error("공지 상세 불러오기 실패:", err);
            throw err;
        }
    };

    return { getList, save, getDetail };
})();
