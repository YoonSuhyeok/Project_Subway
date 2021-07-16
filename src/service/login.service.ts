import axios from '@/service/axios.service'

const kakaoHeader = {
    'Authorization' : '8e43a0698da6290fd5876d5633804562',
    'Content-type' : 'application/x-www-form-urlencoded;charset=utf-8',
};

const getKakaoToken = async (code: string) => {
    console.log('loginWithKakao');
    try {
        const data:any = {
            grant_type: 'authorization_code',
            client_id: '12a7a0cf669e322de8404d4da83ca650',
            redirect_uri: 'http://localhost:8100/logins',
            code: code,
        };
        const queryString = Object.keys(data)
                            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                            .join('&');
        //const result = await axios.post('https://www.makesand.shop', queryString, {headers: {Authorization: 'Bearer ${token}'}})
        console.log('카카오 헤더', kakaoHeader);
        console.log('카카오 쿼리스트링', queryString);
    } catch (e) {
        return e;
    }
}