<template>
    <div class="info_page">
        <div class="user_info">
            <img src="/assets/icon/kakao.png" class="profile_photo">
            <div class="user_info2">
                <ion-text style="width:100%; font-size: 200%; padding: 5% 3%;">{{ nickname }}</ion-text>
                <div>
                    <ion-text style="width:100%; padding: 10% 3%">{{ email }}</ion-text>
                    |
                    <ion-text style="width:100%; padding: 10% 3%">비밀번호 변경</ion-text>
                </div>
            </div>
        </div>
        <div class="allergy_info">
            <div></div>
        </div>
    </div>
</template>

<style scoped>
    .info_page {
        width: 100%;
        height: 100%;
        display: flex;
        padding: 50px;
    }  
    .user_info {
        display: flex;
        width: 100%;
        height: 30%;
        padding: 30px 15px;
        border-radius: 10px;
        box-shadow: 0px 4px 4px rgba(0,0,0,0,15);
    }
    .user_info2 {
        display: flex;
        width: 100%;
        height: 100%;
        padding: 10px;
        flex-direction: column;
    }
    .profile_photo {
        width: 25%;
        height: 100%;
        border-radius: 70%;
    }
</style>

<script>
export default ({
    setup() {
        return {
            nickname: '닉네임',
            email: 'email1234@naver.com'
        }

    },
})
</script>
