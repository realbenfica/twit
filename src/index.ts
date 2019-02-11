import * as Twit from 'twit'

const twit = new Twit({
    consumer_key: 'Pv9Qe0f2JqcTXmExEhZIgb0bp',
    consumer_secret: 'cUUnm4mjPWY7GInGcuYAa0EBykZijrRfEh9U3LmlzxaboMkyMp',
    access_token: '1094991498251300866-wDzwwalHg1qAjKdqjEEtT0FQM17Dj4',
    access_token_secret: '8yMUTwYft0YaVn0D6oc6A6HQWCHDhNE1ei8Ku9W14xJBz'
})

const fn = async () => {
    const tweets = await twit.get('search/tweets', {q:'@super_fake_cat'})
    const data: any = tweets.data
    const list: Twit.Twitter.Status[] = data.statuses

    console.log(data.statuses)
}
fn()

