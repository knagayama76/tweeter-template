const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const createTweetElement = function (tweet) {
  return `
      <article class="tweet">
      <header>
        <div class="tweeter-name">
          <img src=${tweet.user.avatars}>
          <span>${tweet.user.name}</span>
        </div>
        <span class="name-handle">${tweet.user.handle}</span>
      </header>
      <div class="tweeter-content">
        <p>
         ${tweet.content.text}
        </p>
      </div>
      <footer>
        <time class="timeago">${timeago.format(
          new Date(tweet.created_at)
        )}</time>
        <div class="icons">
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `;
};

const renderTweets = function (tweets) {
  $("#tweets-container").empty();
  // loops through tweets
  for (const tweet of tweets) {
    // calls createTweetElement for each tweet
    const tweetElement = createTweetElement(tweet);
    $("#tweets-container").prepend(tweetElement);
  }
};

// $("#client-tweet").submit(function (event) {
//   //console.log("form", this);
//   event.preventDefault();
//   const value = $(this).serialize();
//   const tweet = $("#tweet-text").val();

$(() => {
  // renderTweets(data);

  $("#client-tweet").submit((e) => {
    e.preventDefault();
    console.log(e);
    const value = $("#client-tweet").serialize();
    console.log(value);

    $.post("/tweets", value).then((data) => {
      console.log(data);
    });
  });
});
