export const MediaFormat = {
  profileImageMaxSize: 2097152, // 2Mb (Bytes)
  otherImagesMaxSize: 2097152,// 2Mb (Bytes) ---- //2097152, // 20Mb (Bytes),
  videoMaxSize: 2097152,// 2Mb (Bytes) ---- //52428800, // 50Mb (Bytes),
  docMaxSize: 2097152,// 2Mb (Bytes) ---- // 10Mb (Bytes)
  imageFormats: '.png,.jpeg,.jpg',
  wordFileFormat: '.doc,.docx',
  pdfFormat: '.pdf',
  videoFormat: '.mkv,.mp4,.webm,.mov',
  excelFormat: '.xls,.xlsx',
  allDocFormat: '.pdf,.doc,.docx,.xls,.xlsx',
  allFormat: () => {
    return MediaFormat.imageFormats + ',' + MediaFormat.allDocFormat; //+ ',' + MediaFormat.videoFormat // as for now video is not included
  },
  imageTypeEnum: 1,
  excelTypeEnum: 2,
  wordTypeEnum: 3,
  pdfTypeEnum: 4,
  videoTypeEnum: 5,
}
