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

$(() => {
  // renderTweets(data);

  $("#client-tweet").submit((e) => {
    e.preventDefault();
    console.log(e);
    const value = $("#client-tweet").serialize();
    console.log(value);

    $.post("/tweets", value).then(() => {
      console.log("success");
      loadTweets();
    });
  });

  const loadTweets = function () {
    $.ajax({
      url: "/tweets",
      method: "GET",
    }).then(function (data) {
      renderTweets(data);
    });
  };

  loadTweets();
});
