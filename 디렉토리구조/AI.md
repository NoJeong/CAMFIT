#### AI

```text
+---speak_image
|   |   main.py
|   |   Speak_Image.py
|   |   
|   +---.vscode
|   |       settings.json
|   |       
|   +---IC
|   |   |   image_captioning.py
|   |   |   
|   |   +---captioning
|   |   |   |   __init__.py
|   |   |   |   
|   |   |   +---data
|   |   |   |       dataloader.py
|   |   |   |       dataloaderraw.py
|   |   |   |       pth_loader.py
|   |   |   |       __init__.py
|   |   |   |       
|   |   |   +---models
|   |   |   |       AoAModel.py
|   |   |   |       AttEnsemble.py
|   |   |   |       AttModel.py
|   |   |   |       BertCapModel.py
|   |   |   |       cachedTransformer.py
|   |   |   |       CaptionModel.py
|   |   |   |       FCModel.py
|   |   |   |       M2Transformer.py
|   |   |   |       ShowTellModel.py
|   |   |   |       TransformerModel.py
|   |   |   |       utils.py
|   |   |   |       __init__.py
|   |   |   |       
|   |   |   +---modules
|   |   |   |       losses.py
|   |   |   |       loss_wrapper.py
|   |   |   |       
|   |   |   \---utils
|   |   |           config.py
|   |   |           div_utils.py
|   |   |           eval_multi.py
|   |   |           eval_utils.py
|   |   |           misc.py
|   |   |           opts.py
|   |   |           resnet.py
|   |   |           resnet_utils.py
|   |   |           rewards.py
|   |   |           __init__.py
|   |   |           
|   |   +---model_data
|   |   |       detectron_model.yaml
|   |   |       
|   |   \---vqa_origin
|   |       |   .flake8
|   |       |   .gitignore
|   |       |   ABSTRACTIONS.md
|   |       |   CODE_OF_CONDUCT.md
|   |       |   CONTRIBUTING.md
|   |       |   create_json.py
|   |       |   INSTALL.md
|   |       |   LICENSE
|   |       |   MODEL_ZOO.md
|   |       |   README.md
|   |       |   setup.py
|   |       |   TROUBLESHOOTING.md
|   |       |   
|   |       +---configs
|   |       |   |   e2e_faster_rcnn_R_101_FPN_1x.yaml
|   |       |   |   e2e_faster_rcnn_R_50_C4_1x.yaml
|   |       |   |   e2e_faster_rcnn_R_50_FPN_1x.yaml
|   |       |   |   e2e_faster_rcnn_X_101_32x8d_FPN_1x.yaml
|   |       |   |   e2e_mask_rcnn_R_101_FPN_1x.yaml
|   |       |   |   e2e_mask_rcnn_R_50_C4_1x.yaml
|   |       |   |   e2e_mask_rcnn_R_50_FPN_1x.yaml
|   |       |   |   e2e_mask_rcnn_X_101_32x8d_FPN_1x.yaml
|   |       |   |   
|   |       |   +---caffe2
|   |       |   |       e2e_faster_rcnn_R_101_FPN_1x_caffe2.yaml
|   |       |   |       e2e_faster_rcnn_R_50_C4_1x_caffe2.yaml
|   |       |   |       e2e_faster_rcnn_R_50_FPN_1x_caffe2.yaml
|   |       |   |       e2e_faster_rcnn_X_101_32x8d_FPN_1x_caffe2.yaml
|   |       |   |       e2e_mask_rcnn_R_101_FPN_1x_caffe2.yaml
|   |       |   |       e2e_mask_rcnn_R_50_C4_1x_caffe2.yaml
|   |       |   |       e2e_mask_rcnn_R_50_FPN_1x_caffe2.yaml
|   |       |   |       e2e_mask_rcnn_X_101_32x8d_FPN_1x_caffe2.yaml
|   |       |   |       
|   |       |   +---cityscapes
|   |       |   |       e2e_faster_rcnn_R_50_FPN_1x_cocostyle.yaml
|   |       |   |       e2e_mask_rcnn_R_50_FPN_1x_cocostyle.yaml
|   |       |   |       
|   |       |   +---pascal_voc
|   |       |   |       e2e_faster_rcnn_R_50_C4_1x_1_gpu_voc.yaml
|   |       |   |       e2e_faster_rcnn_R_50_C4_1x_4_gpu_voc.yaml
|   |       |   |       e2e_mask_rcnn_R_50_FPN_1x_cocostyle.yaml
|   |       |   |       
|   |       |   +---quick_schedules
|   |       |   |       e2e_faster_rcnn_R_50_C4_quick.yaml
|   |       |   |       e2e_faster_rcnn_R_50_FPN_quick.yaml
|   |       |   |       e2e_faster_rcnn_X_101_32x8d_FPN_quick.yaml
|   |       |   |       e2e_mask_rcnn_R_50_C4_quick.yaml
|   |       |   |       e2e_mask_rcnn_R_50_FPN_quick.yaml
|   |       |   |       e2e_mask_rcnn_X_101_32x8d_FPN_quick.yaml
|   |       |   |       rpn_R_50_C4_quick.yaml
|   |       |   |       rpn_R_50_FPN_quick.yaml
|   |       |   |       
|   |       |   \---visual_genome_vqa
|   |       |       |   e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_test.yaml
|   |       |       |   e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_train.yaml
|   |       |       |   e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_vqa_test.yaml
|   |       |       |   e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_vqa_train.yaml
|   |       |       |   e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_vqa_val.yaml
|   |       |       |   e2e_faster_rcnn_X-152-32x8d-FPN_1x_MLP_2048_FPN_512_test.yaml
|   |       |       |   e2e_faster_rcnn_X-152-32x8d-FPN_1x_MLP_2048_FPN_512_train.yaml
|   |       |       |   
|   |       |       +---c2
|   |       |       |       modified_for_conversion_e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512.yaml
|   |       |       |       
|   |       |       \---debug
|   |       |               e2e_faster_rcnn_X-101-64x4d-FPN_1x_MLP_2048_FPN_512_vqa_single.yaml
|   |       |               
|   |       +---demo
|   |       |       demo_e2e_mask_rcnn_R_50_FPN_1x.png
|   |       |       demo_e2e_mask_rcnn_X_101_32x8d_FPN_1x.png
|   |       |       predictor.py
|   |       |       README.md
|   |       |       webcam.py
|   |       |       
|   |       +---docker
|   |       |   |   Dockerfile
|   |       |   |   
|   |       |   \---docker-jupyter
|   |       |           Dockerfile
|   |       |           jupyter_notebook_config.py
|   |       |           
|   |       +---maskrcnn_benchmark
|   |       |   |   __init__.py
|   |       |   |   
|   |       |   +---config
|   |       |   |       defaults.py
|   |       |   |       paths_catalog.py
|   |       |   |       __init__.py
|   |       |   |       
|   |       |   +---csrc
|   |       |   |   |   nms.h
|   |       |   |   |   ROIAlign.h
|   |       |   |   |   ROIPool.h
|   |       |   |   |   vision.cpp
|   |       |   |   |   
|   |       |   |   +---cpu
|   |       |   |   |       nms_cpu.cpp
|   |       |   |   |       ROIAlign_cpu.cpp
|   |       |   |   |       vision.h
|   |       |   |   |       
|   |       |   |   \---cuda
|   |       |   |           nms.cu
|   |       |   |           ROIAlign_cuda.cu
|   |       |   |           ROIPool_cuda.cu
|   |       |   |           vision.h
|   |       |   |           
|   |       |   +---data
|   |       |   |   |   build.py
|   |       |   |   |   collate_batch.py
|   |       |   |   |   README.md
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---datasets
|   |       |   |   |   |   coco.py
|   |       |   |   |   |   concat_dataset.py
|   |       |   |   |   |   list_dataset.py
|   |       |   |   |   |   voc.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   \---evaluation
|   |       |   |   |       |   __init__.py
|   |       |   |   |       |   
|   |       |   |   |       +---coco
|   |       |   |   |       |       coco_eval.py
|   |       |   |   |       |       __init__.py
|   |       |   |   |       |       
|   |       |   |   |       \---voc
|   |       |   |   |               voc_eval.py
|   |       |   |   |               __init__.py
|   |       |   |   |               
|   |       |   |   +---samplers
|   |       |   |   |       distributed.py
|   |       |   |   |       grouped_batch_sampler.py
|   |       |   |   |       iteration_based_batch_sampler.py
|   |       |   |   |       __init__.py
|   |       |   |   |       
|   |       |   |   \---transforms
|   |       |   |           build.py
|   |       |   |           transforms.py
|   |       |   |           __init__.py
|   |       |   |           
|   |       |   +---engine
|   |       |   |       inference.py
|   |       |   |       trainer.py
|   |       |   |       __init__.py
|   |       |   |       
|   |       |   +---layers
|   |       |   |       batch_norm.py
|   |       |   |       misc.py
|   |       |   |       nms.py
|   |       |   |       roi_align.py
|   |       |   |       roi_pool.py
|   |       |   |       smooth_l1_loss.py
|   |       |   |       _utils.py
|   |       |   |       __init__.py
|   |       |   |       
|   |       |   +---modeling
|   |       |   |   |   balanced_positive_negative_sampler.py
|   |       |   |   |   box_coder.py
|   |       |   |   |   matcher.py
|   |       |   |   |   poolers.py
|   |       |   |   |   registry.py
|   |       |   |   |   utils.py
|   |       |   |   |   __init__.py
|   |       |   |   |   
|   |       |   |   +---backbone
|   |       |   |   |       backbone.py
|   |       |   |   |       fpn.py
|   |       |   |   |       resnet.py
|   |       |   |   |       __init__.py
|   |       |   |   |       
|   |       |   |   +---detector
|   |       |   |   |       detectors.py
|   |       |   |   |       generalized_rcnn.py
|   |       |   |   |       __init__.py
|   |       |   |   |       
|   |       |   |   +---roi_heads
|   |       |   |   |   |   roi_heads.py
|   |       |   |   |   |   __init__.py
|   |       |   |   |   |   
|   |       |   |   |   +---box_head
|   |       |   |   |   |       box_head.py
|   |       |   |   |   |       inference.py
|   |       |   |   |   |       loss.py
|   |       |   |   |   |       roi_box_feature_extractors.py
|   |       |   |   |   |       roi_box_predictors.py
|   |       |   |   |   |       __init__.py
|   |       |   |   |   |       
|   |       |   |   |   \---mask_head
|   |       |   |   |           inference.py
|   |       |   |   |           loss.py
|   |       |   |   |           mask_head.py
|   |       |   |   |           roi_mask_feature_extractors.py
|   |       |   |   |           roi_mask_predictors.py
|   |       |   |   |           __init__.py
|   |       |   |   |           
|   |       |   |   \---rpn
|   |       |   |           anchor_generator.py
|   |       |   |           inference.py
|   |       |   |           loss.py
|   |       |   |           rpn.py
|   |       |   |           __init__.py
|   |       |   |           
|   |       |   +---solver
|   |       |   |       build.py
|   |       |   |       lr_scheduler.py
|   |       |   |       __init__.py
|   |       |   |       
|   |       |   +---structures
|   |       |   |       bounding_box.py
|   |       |   |       boxlist_ops.py
|   |       |   |       image_list.py
|   |       |   |       segmentation_mask.py
|   |       |   |       __init__.py
|   |       |   |       
|   |       |   \---utils
|   |       |           c2_model_loading.py
|   |       |           checkpoint.py
|   |       |           collect_env.py
|   |       |           comm.py
|   |       |           env.py
|   |       |           imports.py
|   |       |           logger.py
|   |       |           metric_logger.py
|   |       |           miscellaneous.py
|   |       |           model_serialization.py
|   |       |           model_zoo.py
|   |       |           README.md
|   |       |           registry.py
|   |       |           __init__.py
|   |       |           
|   |       +---tests
|   |       |       checkpoint.py
|   |       |       test_data_samplers.py
|   |       |       test_metric_logger.py
|   |       |       
|   |       \---tools
|   |           |   c2_to_pt.py
|   |           |   extract_vqa_feat.py
|   |           |   test_net.py
|   |           |   train_net.py
|   |           |   
|   |           \---cityscapes
|   |                   convert_cityscapes_to_coco.py
|   |                   instances2dict_with_polygons.py
|   |                   
|   +---TTS
|   |   |   .gitmodules
|   |   |   audio_processing.py
|   |   |   config.yaml
|   |   |   data_utils.py
|   |   |   denoiser.py
|   |   |   glow.py
|   |   |   inference.py
|   |   |   loss_function.py
|   |   |   melspec_example.ipynb
|   |   |   model.py
|   |   |   stft.py
|   |   |   tacotron.py
|   |   |   train.py
|   |   |   utils.py
|   |   |   
|   |   +---filelists
|   |   |       ljs_audio_text_test_filelist.txt
|   |   |       ljs_audio_text_train_filelist.txt
|   |   |       ljs_audio_text_val_filelist.txt
|   |   |       
|   |   \---text
|   |           cleaners.py
|   |           cmudict.py
|   |           LICENSE
|   |           numbers.py
|   |           symbols.py
|   |           __init__.py
|   |           
|   \---VC
|       |   config.yaml
|       |   data_utils.py
|       |   inference.py
|       |   main.py
|       |   model.py
|       |   output
|       |   solver.py
|       |   source_audio.wav
|       |   target_audio.wav
|       |   train.sh
|       |   utils.py
|       |   voice_conversion.py
|       |   
|       +---preprocess
|       |       audio2mel.py
|       |       make_datasets_vctk.py
|       |       preprocess_vctk.sh
|       |       reduce_dataset.py
|       |       sample_single_segments.py
|       |       vctk.config
|       |       
|       \---preprocessed
|               attr.pkl
```

