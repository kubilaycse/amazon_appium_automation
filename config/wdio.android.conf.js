const {config} = require('./wdio.shared.conf.js')

config.port = 4723


config.specs = [
    '../test/specs/android/card.spec.js'
]

config.capabilities = [
    {
        'path': '/wd/hub',
        'appium:platformName':'Android',
        'appium:platformVersion':'11.0',
        'appium:deviceName':'Pixel 4a API 30',
        'appium:automationName':'UIAutomator2',
        'appium:app': 'C:\\Users\\ksaribardak.OFFICE\\Documents\\Personal\\Development_Appium\\amazon_appium_automation\\app\\android\\amazon-shopping.apk',
        'appium:autoGrantPermissions': true,
        'appium:appWaitActivity': 'com.amazon.mShop.navigation.MainActivity',
        'appium:fullReset': 'true'

    }
]

exports.config = config
