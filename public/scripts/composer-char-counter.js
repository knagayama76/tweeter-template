"use strict";

// Function counting the character input
$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const valLength = $("#tweet-text").val().length;
    console.log(valLength);
    // const parent = $(this).siblings()[1];
    // console.log(parent);
    const leftover = 140 - valLength;
    $(".counter").text(leftover);
    if (leftover < 0) {
      $(".counter").css({ color: "red" });
    }
  });
});
