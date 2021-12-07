<p align="center">
  <img src="https://github.com/awexxx/medaltv-wrapper/blob/vjs/img/medaljs.png?raw=true" />
</p>

## Medal.tv Javascript API Wrapper
This wrapper utilizes [Medal.tv's Developer API](https://docs.medal.tv) to return clips to your website!

### Usage
```
<script src="https://cdn.jsdelivr.net/gh/awexxx/medaltv-wrapper@vvjs/wrapper.js"></script>
```

### How do I use this?
Firstly, create an element with the attribute `data-medal-key`. In this, insert your Medal API key.  
Right now, you can only fetch a trending clip from a certain game. To do this, create another element with the `data-medal-trending` attribute, and the value being a game name.  
After this, you should have an embedded iframe on the page to do whatever with!