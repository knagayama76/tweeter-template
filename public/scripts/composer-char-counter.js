"use strict";

$(document).ready(function () {
  $("#tweet-text").on("input", function () {
    const valLength = $(this).val().length;
    const parent = $(this).siblings()[1];
    const leftover = 140 - valLength;
    $($(parent).find(".counter")).text(leftover);
    if (leftover < 0) {
      $($(parent).find(".counter")).css({ color: "red" });
    }
  });
});
