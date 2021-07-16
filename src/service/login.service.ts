import AxiosService from "@/service/axios.service"

const getKakaoToken = async (code: string) => {
    console.log('loginWithKakao');
    try {
        const result = await AxiosService.instance.post('/auth/kakao', {headers: {Code: `Bearer ${code}`}})
        console.log('카카오 인증 코드', code);
        return result;
    } catch (e) {
        return e;
    }
}