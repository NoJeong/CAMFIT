#### Frontend

```text
+---frontends
|   |   .gitignore
|   |   database.rules.json
|   |   firebase.json
|   |   package-lock.json
|   |   package.json
|   |   README.md
|   |   yarn.lock
|   |   
|   +---node_modules
|   +---public
|   |   |   favicon.ico
|   |   |   index.html
|   |   |   logo192.png
|   |   |   logo512.png
|   |   |   manifest.json
|   |   |   robots.txt
|   |   |   
|   |   +---teachable
|   |   |   |   arm.mp4
|   |   |   |   core-.mp4
|   |   |   |   leg.mp4
|   |   |   |   shoulder.mp4
|   |   |   |   Woman.mp4
|   |   |   |   
|   |   |   +---arm
|   |   |   |       metadata.json
|   |   |   |       model.json
|   |   |   |       weights.bin
|   |   |   |       
|   |   |   +---core-
|   |   |   |       metadata.json
|   |   |   |       model.json
|   |   |   |       weights.bin
|   |   |   |       
|   |   |   +---leg
|   |   |   |       metadata.json
|   |   |   |       model.json
|   |   |   |       weights.bin
|   |   |   |       
|   |   |   \---shoulder
|   |   |           metadata.json
|   |   |           model.json
|   |   |           weights.bin
|   |   |           
|   |   \---wavfolder
|   |           0.wav
|   |           1.wav
|   |           10.wav
|   |           11_train_finish.wav
|   |           12_check_your_pose.wav
|   |           13_nice.wav
|   |           14_correct.wav
|   |           2.wav
|   |           3.wav
|   |           4.wav
|   |           5.wav
|   |           6.wav
|   |           7.wav
|   |           8.wav
|   |           9.wav
|   |           
|   \---src
|       |   App.css
|       |   App.js
|       |   App.test.js
|       |   index.css
|       |   index.js
|       |   logo.svg
|       |   reportWebVitals.js
|       |   setupTests.js
|       |   
|       +---component
|       |   |   component.css
|       |   |   Footer.css
|       |   |   Footer.js
|       |   |   Navbar.css
|       |   |   Navbar.js
|       |   |   
|       |   +---Account
|       |   |       login.css
|       |   |       LoginModal.js
|       |   |       Signup.css
|       |   |       Signup.js
|       |   |       
|       |   +---Community
|       |   |       ArticleCreate.js
|       |   |       ArticleDetail.js
|       |   |       ArticleEdit.js
|       |   |       ArticleSearch.js
|       |   |       CommentCreate.js
|       |   |       
|       |   +---Info
|       |   |   |   info.css
|       |   |   |   InfoCard.js
|       |   |   |   InfoCardList.js
|       |   |   |   InfoDetail.js
|       |   |   |   InfoMain.js
|       |   |   |   
|       |   |   \---images
|       |   |           honey.jpg
|       |   |           
|       |   +---Mainpage
|       |   |   |   CamFitHow.js
|       |   |   |   CamFitWhat.js
|       |   |   |   CamFitWhy.js
|       |   |   |   main.css
|       |   |   |   MainTop.js
|       |   |   |   
|       |   |   \---images
|       |   |           CamFit.png
|       |   |           Why1.gif
|       |   |           Why2.gif
|       |   |           Why3.gif
|       |   |           메인 이미지.jpg
|       |   |           캠피트.mp4
|       |   |           
|       |   +---Selftrain
|       |   |   |   ArrowNext.js
|       |   |   |   Car.js
|       |   |   |   Jandi.js
|       |   |   |   SelfDetail.js
|       |   |   |   Selfdetailcate.js
|       |   |   |   SelfMain.js
|       |   |   |   SelftrainCard.js
|       |   |   |   SelftrainCardlist.js
|       |   |   |   SelftrainSidebar.js
|       |   |   |   train.css
|       |   |   |   운동하기 배경.jpg
|       |   |   |   
|       |   |   \---images
|       |   |           shoulder.jpg
|       |   |           
|       |   +---utils
|       |   |       FileUpload.js
|       |   |       ImageSlider.js
|       |   |       SearchFeature.js
|       |   |       
|       |   \---VideoClass
|       |       |   ClassButton.js
|       |       |   ClassDetailPage.css
|       |       |   ClassDetailPage.js
|       |       |   PayButton.js
|       |       |   payment.js
|       |       |   ProductInfo.css
|       |       |   ProductInfo.js
|       |       |   UploadClass.js
|       |       |   UploadClassPage.js
|       |       |   
|       |       +---images
|       |       |       Abract01.png
|       |       |       
|       |       \---VideoChat
|       |           |   App_.css
|       |           |   App_.js
|       |           |   config.js
|       |           |   VideoChat.css
|       |           |   VideoChat.js
|       |           |   VideoChatContainer.js
|       |           |   
|       |           \---modules
|       |                   FirebaseModule.js
|       |                   RTCModule.js
|       |                   
|       +---constants
|       |       index.js
|       |       
|       +---fonts
|       |       62570.ttf
|       |       drfont_daraehand_Basic.ttf
|       |       payboocMedium.ttf
|       |       sandol.ttf
|       |       
|       +---pages
|       |   |   Community.js
|       |   |   Exercise.css
|       |   |   Exercise.js
|       |   |   Info.js
|       |   |   Mainpage.js
|       |   |   page.css
|       |   |   Selftrain.js
|       |   |   SelftrainDetail.js
|       |   |   VideoClass.css
|       |   |   VideoClass.js
|       |   |   운동하기 배경.jpg
|       |   |   
|       |   +---hooks
|       |   \---images
|       |           classmain.jpg
|       |           exermain.jpg
|       |           main2.jpg
|       |           main3.jpg
|       |           
|       +---_actions
|       |       ActionTypes.js
|       |       index.js
|       |       
|       \---_reducers
|               community.js
|               email.js
|               index.js
|               infolist.js
|               login.js
|               selftrain.js
|               signup.js
```

