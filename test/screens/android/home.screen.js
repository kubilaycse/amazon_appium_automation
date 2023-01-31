class HomeScreen{
    get searchIcon(){
        return $('id:com.amazon.mShop.android.shopping:id/chrome_action_bar_search_disabled')
    }
    get searchArea(){
        return $('id:com.amazon.mShop.android.shopping:id/rs_search_src_text')
    }
    get searchOutputs(){
        return $$('android.widget.Button')
    }
    get primeEnable(){
        return $('//*[@content-desc="BEDAVA Teslimat"]/android.widget.Image[2]')
    }
    get itemCards(){
        return $('//*[contains(@text,"TL")]')
    }
    get addToCard(){
        return $('id:addToCart_feature_div')
    }
    get bitti(){
        return $('//*[text="BİTTİ"]')
    }
    get goToCard(){
        return $('id:com.amazon.mShop.android.shopping:id/cart_count')
    }
    get deleteFromCard(){
        return $('//*[text="Sil"]')
    }

}

export default new HomeScreen() 