class WelcomeScreen{
    get goToTR(){
        return $('id:com.amazon.mShop.android.shopping:id/btn_redirect_marketplace')
    }
    get logo(){
        return $('id:com.amazon.mShop.android.shopping:id/sso_splash_logo')
    }
    get skipSigninBtn(){
        return $('id:com.amazon.mShop.android.shopping:id/skip_sign_in_button')
    }
}

export default new WelcomeScreen()