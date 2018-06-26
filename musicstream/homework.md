# Homeworks for MusicStream

## Homework for 07/02

Extend the MediaGrid component by adding a MediaItem component. You can think of the MediaItem component as consisting of a thumbnail, a video url (if the user clicks on the component), and a video title. Note that MediaItem should be registered locally in the MediaGrid components array, similar to App.vue file.

```javascript 
// App.vue
export default {
  name: 'app',
  components: {
    MediaSearch,
    MediaGrid,
  },
};
```

To do this assignment, you can use the first element in the video array returned from vimeo. Pass in video url, video title into the MediaItem component as props. Don't worry about iterating through the entire collection returned from vimeo just yet. For styling of a MediaItem, you can use Bootstrap Card component. 

Some helpful links:
* https://bootstrap-vue.js.org/docs/components/card/
* https://vuejs.org/v2/guide/components.html
* https://vuejs.org/v2/guide/components-registration.html
* https://vuejs.org/v2/guide/components-props.html


### How to get data from Vimeo

To get data from vimeo, you have to provide your own API_KEY in vimeo.service.js
To get your own API_KEY: 

1. Go to https://developer.vimeo.com/apps/new?source=getting-started and register an App. You can spoof the details but you need this step in order to make an API_KEY. You will need to register for an account with vimeo to do this. 
2. Go to https://developer.vimeo.com/apps and click on the app you registered. 
3. You should see "Details" and "Authentication" grouped together on the top-left
corner of the page. Click the Authentication button. 
4. Scroll down to "Generate an Access Token". For our purposes, under Scopes - just check "Public". Click Generate Token. 
5. Paste your token into API_KEY in vimeo.service.js as a string. 



