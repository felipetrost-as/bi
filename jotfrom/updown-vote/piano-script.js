const container = document.querySelector(".piano-html--below-article");
container.innerHTML = `
    <style>
      #submit-dummy {
        display: none;
      }
      .updown * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      .updown {
        border-top: 1px solid #757575;
        border-bottom: 1px solid #757575;
        padding: 30px 0;
        margin-top: 40px;
        margin-bottom: 20px;
      }
      .updown form {
        width: fit-content;
        max-width: 100%;
      }
      .updown button.thumb {
        display: block;
        background-color: transparent !important;
        border: none;
        outline: none;
        background-image: none !important;
        height: fit-content;
      }
      .updown button:active {
        background-color: transparent !important;
        box-shadow: none !important;
      }
      .updown button:disabled path {
        fill: #e8e9ea !important;
      }
      .updown button:disabled circle {
        stroke: #e8e9ea !important;
      }
      .updown button svg circle {
        transition: 0.2s all ease;
      }
      .updown button:hover > svg circle,
      .updown button.selected svg circle {
        stroke: #096ffa;
      }
      .updown .like-buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        gap: 100px;
      }

      .updown .like-buttons input,
      .updown .like-buttons input::after,
      .updown .like-buttons input::before,
      .updown .like-buttons label::before {
        display: none !important;
        background-color: transparent;
      }
      .form-radio + label:after,
      .form-radio + span:after {
        display: none;
      }

      .updown .title {
        font-family: LabGrotesque-Black, Helvetica, Arial, sans-serif;
        text-transform: uppercase;
        color: #111111;
        font-size: 18px;
        letter-spacing: 2.08px;
        margin-bottom: var(--margin-bottom);
        padding-bottom: var(--padding-bottom);
        font-weight: normal;
        text-align: center;
        margin-bottom: 30px;
      }

      .updown #commentary {
        max-height: 0;
        margin: 0 30px;
        overflow: hidden;
        transition: all 0.2s ease-in-out;
      }
      .updown #commentary.opened {
        max-height: 100vh;
      }
      /* jotform style copy */
      .form-label-top {
        margin-bottom: 14px;
      }

      .form-textarea {
        padding: 0.625em;
        max-width: 100%;
      }
      /* jotform style fighting */
      .jf-form-buttons:not(.form-pagebreak-back),
      form input[type="checkbox"] + label,
      form input[type="radio"] + label,
      .form-checkbox + label,
      .form-checkbox + span,
      .form-radio + label,
      .form-radio + span {
        margin: 0;
        padding: 0;
      }
    </style>
    <iframe name="like" id="submit-dummy"></iframe>

    <div class="updown">
      <p class="title">Wie hat euch die Übersetzung gefallen?</p>
      <div class="like-buttons">
        <form
          class="jotform-form like-buttons"
          action="https://submit.jotformeu.com/submit/230542012648044"
          method="post"
          name="form_230542012648044"
          id="230542012648044"
          accept-charset="utf-8"
          autocomplete="on"
          target="like"
        >
          <input type="hidden" name="formID" value="230542012648044" />
          <input type="hidden" id="JWTContainer" value="" />
          <input type="hidden" id="cardinalOrderNumber" value="" />

          <input
            type="hidden"
            id="input_4_url"
            name="q4_siteUrl"
            data-type="input-textbox"
            class="form-textbox"
            data-defaultvalue=""
            style="width: 310px"
            size="310"
            value=""
            data-component="textbox"
            aria-labelledby="label_4"
          />
          <!-- like button -->
          <input
            type="radio"
            aria-describedby="label_3"
            class="form-radio"
            id="input_3_0"
            name="q3_bewertung"
            value="like"
          />
          <label for="input_3_0">
            <button
              id="likebtn"
              type="submit"
              class="thumb form-submit-button submit-button jf-form-buttons jsTest-submitField"
              data-component="button"
              data-content=""
            >
              <svg
                class="value-thumbs Good"
                alt="Yes, thumbs up"
                width="70"
                height="70"
                viewBox="-22 -20 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <title id="thumbs-up-title">Yes</title>
                <circle
                  id="thumbs-up-circle"
                  cx="15"
                  cy="17"
                  r="35"
                  fill="none"
                  stroke="gray"
                  stroke-width="1"
                ></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.8192 0.392351C14.5473 -0.418126 12.8528 0.0735804 12.2123 1.43898L7.72141 11.0129L3.4993 11.5456C1.49961 11.7979 0 13.4986 0 15.5142V26.0017C0 28.2108 1.79086 30.0017 4 30.0017H24.1906C26.1814 30.0017 27.8692 28.5376 28.1504 26.5668L30.0447 13.2929C30.4175 10.6802 28.2025 8.42892 25.5841 8.75927L19.6923 9.50262V5.32887C19.6923 3.79131 18.9073 2.36017 17.6106 1.53389L15.8192 0.392351ZM10.0867 13.0348L14.6868 3.22806L15.9984 4.06388C16.4306 4.3393 16.6923 4.81635 16.6923 5.32887V11.2038V12.9049L18.3801 12.692L25.9596 11.7357C26.6142 11.6531 27.168 12.2159 27.0748 12.8691L25.1805 26.143C25.1102 26.6357 24.6883 27.0017 24.1906 27.0017H9.87988V13.4756L10.0867 13.0348ZM7.37988 14.0798L3.87483 14.522C3.3749 14.5851 3 15.0103 3 15.5142V26.0017C3 26.554 3.44772 27.0017 4 27.0017H7.37988V14.0798Z"
                  fill="#111111"
                ></path>
              </svg>
            </button>
          </label>
          <!-- end: like button -->
          <!-- dislike button -->
          <input
            type="radio"
            aria-describedby="label_3"
            class="form-radio"
            id="input_3_1"
            name="q3_bewertung"
            value="dislike"
          />
          <label for="input_3_1">
            <button
              id="dislikebtn"
              type="submit"
              class="thumb form-submit-button submit-button jf-form-buttons jsTest-submitField"
              data-component="button"
              data-content=""
            >
              <svg
                class="value-thumbs Bad"
                alt="No, thumbs down"
                width="70"
                height="70"
                viewBox="-22 -24 75 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
              >
                <title id="thumbs-down-title">No</title>
                <circle
                  id="thumbs-down-circle"
                  cx="15"
                  cy="13"
                  r="35"
                  fill="none"
                  stroke="gray"
                  stroke-width="1"
                ></circle>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.2213 29.6048C15.4943 30.4185 17.1925 29.9259 17.8325 28.5573L22.3073 18.9878L26.5065 18.4563C28.5055 18.2033 30.0043 16.5029 30.0043 14.4879L30.0043 3.99955C30.0043 1.79041 28.2134 -0.000452198 26.0043 -0.000452391L5.89259 -0.00045415C3.9011 -0.000454324 2.21294 1.46454 1.93246 3.43619L0.0443241 16.7089C-0.327363 19.3217 1.88852 21.572 4.5067 21.2406L10.3647 20.4992L10.3647 24.6752C10.3647 26.2104 11.1474 27.6398 12.441 28.4667L14.2213 29.6048L15.0292 28.3409L14.2213 29.6048ZM19.9399 16.9681L15.3565 26.7698L14.0568 25.939C13.6256 25.6634 13.3647 25.1869 13.3647 24.6752L13.3647 18.7974L13.3647 17.0956L11.6763 17.3093L4.13002 18.2644C3.47547 18.3472 2.9215 17.7847 3.01442 17.1315L4.90256 3.8587C4.97268 3.36579 5.39472 2.99955 5.89259 2.99955L20.1504 2.99955L20.1504 16.5178L19.9399 16.9681ZM22.6433 15.9213L26.1298 15.48C26.6296 15.4168 27.0043 14.9917 27.0043 14.4879L27.0043 3.99955C27.0043 3.44726 26.5566 2.99955 26.0043 2.99955L22.6433 2.99955L22.6433 15.9213Z"
                  fill="#111111"
                ></path>
              </svg>
              <input type="submit" value="" />
            </button>
          </label>
          <!-- end: dislike button -->
        </form>
      </div>
      <div id="commentary">
        <!-- Comments form: start -->
        <style type="text/css">
          @media print {
            .form-section {
              display: inline !important;
            }
            .form-pagebreak {
              display: none !important;
            }
            .form-section-closed {
              height: auto !important;
            }
            .page-section {
              position: initial !important;
            }
          }
        </style>
        <style type="text/css" id="form-designer-style">
          /* Injected CSS Code */
          .form-label {
            font-family: LabGrotesque Black, Helvetica, sans-serif;
            font-size: 22px;
            color: #111516;
            margin-left: 0;
            font-weight: bold;
          }
          .form-checkbox + label,
          .form-checkbox + span,
          .form-radio + label,
          .form-radio + span {
            font-family: TiemposTextWeb-Regular, Georgia, Times, serif;
            color: #111516 !important;
            font-size: 20px;
          }

          .supernova .form-all,
          .form-all {
            box-shadow: none !important;
            border: none !important;
          }

          form {
            width: 100%;
            height: 100%;
          }

          form,
          .form-all,
          ul.page-section li:first-child {
            margin: 0 !important;
            padding: 0 !important;
          }

          .form-all {
            max-width: none;
          }

          ul.page-section {
            padding: 0px;
          }
          .form-buttons-wrapper {
            display: block;
            border: none;
            padding-bottom: 0;
            padding-left: 0;
            width: 100%;
            margin: 0;
            margin-bottom: 16px;
          }

          .form-buttons-wrapper button {
            margin-left: 0 !important;
            background-color: #096ffa !important;
            border: none !important;
            background-image: none !important;
            font-family: LabGrotesque Black, Helvetica, sans-serif;
            font-size: 12px;
            letter-spacing: 2.58px;
            text-transform: uppercase;
            border-radius: 25px;
            padding: 2px 16px !important;
            margin-top: 30px !important;
            width: auto;
            min-width: 180px;
            height: 3em;
          }

          .form-buttons-wrapper button:hover {
            background-color: #096ffa;
          }

          .submit-button {
            font-weight: bold;
            margin: auto;
            text-align: center;
          }

          @media screen and (max-width: 782px) {
            .form-label {
              font-size: 16px;
            }

            .form-checkbox + label,
            .form-checkbox + span,
            .form-radio + label,
            .form-radio + span {
              font-size: 17.5px;
            }
          }

          /* Handle stars for mobile */
          @media screen and (max-width: 625px) {
            .form-star-rating,
            li[data-type="control_rating"] > .form-input-wide {
              flex-wrap: nowrap;
              justify-content: space-between;
              gap: 5px;
            }
            .form-star-rating .form-star-rating-star:not(:last-child) {
              margin-right: 0;
            }
          }

          /* Injected CSS Code */
        </style>

        <form
          class="jotform-form"
          action="https://submit.jotformeu.com/submit/230542751600042"
          method="post"
          name="form_230542751600042"
          id="230542751600042"
          accept-charset="utf-8"
          autocomplete="on"
        >
          <input
            type="hidden"
            id="input_6_comments"
            name="q6_like"
            data-type="input-textbox"
            class="form-textbox"
            data-defaultvalue=""
            style="width: 310px"
            size="310"
            value=""
            data-component="textbox"
            aria-labelledby="label_6"
          />
          <input
            type="hidden"
            id="input_7_comments"
            name="q7_siteUrl"
            data-type="input-textbox"
            class="form-textbox"
            data-defaultvalue=""
            style="width: 310px"
            size="310"
            value=""
            data-component="textbox"
            aria-labelledby="label_7"
          />
          <input type="hidden" name="formID" value="230542751600042" /><input
            type="hidden"
            id="JWTContainer"
            value=""
          /><input type="hidden" id="cardinalOrderNumber" value="" />
          <div role="main" class="form-all">
            <style>
              .form-all:before {
                background: none;
              }
            </style>
            <ul class="form-section page-section">
              <li class="form-line" data-type="control_textarea" id="id_3">
                <label
                  class="form-label form-label-top form-label-auto"
                  id="label_3"
                  for="input_3"
                >
                  Hier könnt ihr eure Meinung weiter ausführen:
                </label>
                <div id="cid_3" class="form-input-wide" data-layout="full">
                  <textarea
                    id="input_3"
                    class="form-textarea"
                    name="q3_additionalComments"
                    style="width: 648px; height: 163px"
                    data-component="textarea"
                    aria-labelledby="label_3"
                  ></textarea>
                </div>
              </li>
              <li class="form-line" data-type="control_button" id="id_2">
                <div id="cid_2" class="form-input-wide" data-layout="full">
                  <div
                    data-align="auto"
                    class="form-buttons-wrapper form-buttons-auto jsTest-button-wrapperField"
                  >
                    <button
                      id="input_2"
                      type="submit"
                      class="form-submit-button submit-button jf-form-buttons jsTest-submitField"
                      data-component="button"
                      data-content=""
                    >
                      Absenden
                    </button>
                  </div>
                </div>
              </li>
              <li style="display: none">
                Should be Empty: <input type="text" name="website" value="" />
              </li>
            </ul>
          </div>
          <script>
            JotForm.showJotFormPowered = "0";
          </script>
          <script>
            JotForm.poweredByText = "Powered by Jotform";
          </script>
          <input
            type="hidden"
            class="simple_spc"
            id="simple_spc"
            name="simple_spc"
            value="230542751600042"
          />
          <script type="text/javascript">
            var all_spc = document.querySelectorAll(
              "form[id="230542751600042"] .si" + "mple" + "_spc"
            );
            for (var i = 0; i < all_spc.length; i++) {
              all_spc[i].value = "230542751600042-230542751600042";
            }
          </script>
        </form>
        <!-- Custom stuff for thank you page -->
        <iframe name="dummy-frame" style="display: none"></iframe>
        <script>
          const likeBtn = document.getElementById("likebtn");
          const dislikeBtn = document.getElementById("dislikebtn");
          const commentBox = document.getElementById("commentary");
          const formUpDown = document.getElementById("230542012648044");
          const likeRadio = document.getElementById("input_3_0");
          const dislikeRadio = document.getElementById("input_3_1");
          const commentInfo = document.getElementById("input_6_comments");
          document.getElementById("input_7_comments").value =
            window.location.href;
          document.getElementById("input_4_url").value =
            window.location != window.parent.location
              ? document.referrer
              : document.location.href;

          const btns = [likeBtn, dislikeBtn];
          let notSelected;
          let likeSubmitted = false;

          function jotFormClickedUpDown(e) {
            if (likeSubmitted) return;
            likeSubmitted = true;
            const target = likeBtn.contains(e.target) ? likeBtn : dislikeBtn;
            const other = target === likeBtn ? dislikeBtn : likeBtn;

            if (target === likeBtn) likeRadio.checked = true;
            else dislikeRadio.checked = true;

            target.classList.add("selected");
            other.disabled = true;
            notSelected = other;
            commentBox.classList.add("opened");

            commentInfo.value = target === likeBtn ? "like" : "dislike";

            setTimeout(() => {
              formUpDown.addEventListener("submit", (e) => e.preventDefault());
            }, 300);
          }

          likeBtn.addEventListener("click", jotFormClickedUpDown);
          dislikeBtn.addEventListener("click", jotFormClickedUpDown);
          // Form id hier kopieren
          (() => {
            const form = document.getElementById("230542751600042");
            form.target = "dummy-frame";
            form.addEventListener("submit", () => {
              // const thanks = document.createElement("p");
              // thanks.innerText = "Danke!";

              // form.parentNode.insertBefore(thanks, form.nextSibling);
              // form.parentNode.removeChild(form);

              commentBox.classList.remove("opened");
              notSelected.parentElement.removeChild(notSelected);
            });
          })();
        </script>

        <!-- Comments form: end -->
      </div>
    </div>
    <!-- Custom script -->
    <script type="text/javascript"></script>
    <script type="text/javascript">
      JotForm.ownerView = true;
    </script>
    <script type="text/javascript">
      JotForm.forwardToEu = true;
    </script>
`;
// Timeout to wait until elements are loaded into te DOM
setTimeout(() => {
  var all_spc = document.querySelectorAll(
    "form[id='230542751600042'] .si" + "mple" + "_spc"
  );
  for (var i = 0; i < all_spc.length; i++) {
    all_spc[i].value = "230542751600042-230542751600042";
  }

  const likeBtn = document.getElementById("likebtn");
  const dislikeBtn = document.getElementById("dislikebtn");
  const commentBox = document.getElementById("commentary");
  const formUpDown = document.getElementById("230542012648044");
  const likeRadio = document.getElementById("input_3_0");
  const dislikeRadio = document.getElementById("input_3_1");
  const commentInfo = document.getElementById("input_6_comments");
  document.getElementById("input_7_comments").value = window.location.href;
  document.getElementById("input_4_url").value = window.location.href;

  const btns = [likeBtn, dislikeBtn];
  let notSelected;
  let likeSubmitted = false;

  function jotFormClickedUpDown(e) {
    if (likeSubmitted) return;
    e.preventDefault();
    likeSubmitted = true;
    const target = likeBtn.contains(e.target) ? likeBtn : dislikeBtn;
    const other = target === likeBtn ? dislikeBtn : likeBtn;

    if (target === likeBtn) likeRadio.checked = true;
    else dislikeRadio.checked = true;

    target.classList.add("selected");
    other.disabled = true;
    notSelected = other;
    commentBox.classList.add("opened");

    commentInfo.value = target === likeBtn ? "like" : "dislike";

    formUpDown.submit();
    setTimeout(() => {
      formUpDown.addEventListener("submit", (e) => e.preventDefault());
    }, 300);
  }

  likeBtn.addEventListener("click", jotFormClickedUpDown);
  dislikeBtn.addEventListener("click", jotFormClickedUpDown);
  // Form id hier kopieren
  (() => {
    const form = document.getElementById("230542751600042");
    form.target = "dummy-frame";
    form.addEventListener("submit", () => {
      // const thanks = document.createElement("p");
      // thanks.innerText = "Danke!";

      // form.parentNode.insertBefore(thanks, form.nextSibling);
      // form.parentNode.removeChild(form);

      commentBox.classList.remove("opened");
      notSelected.parentElement.removeChild(notSelected);
    });
  })();
}, 500);
