export type VocabItem = {
  id: number
  word: string
  meaningVi: string
  ipa?: string
  category?: 'animals' | 'basic'
  imageSrc?: string
  videoSrc?: string
  example?: string
  storyEn?: string
  storyVi?: string
  cardSubtitleEn?: string
  cardTitleVi?: string
  cardNo?: number
  cardTotal?: number
  rarity?: string
}

export const VOCAB: VocabItem[] = [
  { id: 1, word: 'Pencil', meaningVi: 'Bút chì', ipa: "/'pɛn.səl/", category: 'basic', imageSrc: new URL('../assets/Flashcard1.png', import.meta.url).href },
  { id: 2, word: 'Pen', meaningVi: 'Bút mực', ipa: '/pen/', category: 'basic', imageSrc: new URL('../assets/Flashcard2.png', import.meta.url).href },
  { id: 3, word: 'Eraser', meaningVi: 'Cục tẩy', ipa: "/ɪ'reɪ.zər/", category: 'basic', imageSrc: new URL('../assets/Flashcard3.png', import.meta.url).href , videoSrc: new URL('../assets/hi_chào_các_bạn_mình_là_cục_tẩy.mp4', import.meta.url).href },
  { id: 4, word: 'Notebook', meaningVi: 'Tập vở', ipa: "/'noʊt.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard4.png', import.meta.url).href },
  { id: 5, word: 'Ruler', meaningVi: 'Thước kẻ', ipa: "/'ru:.lər/", category: 'basic', imageSrc: new URL('../assets/Flashcard5.png', import.meta.url).href },
  { id: 6, word: 'Book', meaningVi: 'Sách', ipa: '/bʊk/', category: 'basic', imageSrc: new URL('../assets/Flashcard6.png', import.meta.url).href },
  { id: 7, word: 'Notebook Label', meaningVi: 'Nhãn vở', ipa: "/'noʊt.bʊk 'leɪ.bəl/", category: 'basic', imageSrc: new URL('../assets/Flashcard7.png', import.meta.url).href },
  { id: 8, word: 'Backpack', meaningVi: 'Ba lô', ipa: "/'bæk.pæk/", category: 'basic', imageSrc: new URL('../assets/Flashcard8.png', import.meta.url).href },
  { id: 9, word: 'Pencil case', meaningVi: 'Hộp bút', ipa: "/ˈpensəl keɪs/", category: 'basic', imageSrc: new URL('../assets/Flashcard9.png', import.meta.url).href },
  { id: 10, word: 'Marker', meaningVi: 'Bút lông', ipa: "/'mɑ:.kə/", category: 'basic', imageSrc: new URL('../assets/Flashcard10.png', import.meta.url).href },
  { id: 11, word: 'Watercolor', meaningVi: 'Màu nước', ipa: "/'wɔ:tə.kʌl.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard11.png', import.meta.url).href },
  { id: 12, word: 'Highlighter', meaningVi: 'Bút dạ quang', ipa: "/'haɪ.laɪ.tər/", category: 'basic', imageSrc: new URL('../assets/Flashcard12.png', import.meta.url).href },
  { id: 13, word: 'Crayon', meaningVi: 'Bút sáp màu', ipa: "/'kreɪ.ɒn/", category: 'basic', imageSrc: new URL('../assets/Flashcard13.png', import.meta.url).href },
  { id: 14, word: 'Colored pencil', meaningVi: 'Bút chì màu', ipa: "/'kʌl.əd 'pen.səl/", category: 'basic', imageSrc: new URL('../assets/Flashcard14.png', import.meta.url).href },
  { id: 15, word: 'Sharpener', meaningVi: 'Đồ gọt bút chì', ipa: "/'ʃɑ:r.pən.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard15.png', import.meta.url).href },
  { id: 16, word: 'Glue', meaningVi: 'Keo dán', ipa: '/ɡlu:/', category: 'basic', imageSrc: new URL('../assets/Flashcard16.png', import.meta.url).href },
  { id: 17, word: 'Scissors', meaningVi: 'Cây kéo', ipa: "/'sɪz.əz/", category: 'basic', imageSrc: new URL('../assets/Flashcard17.png', import.meta.url).href },
  { id: 18, word: 'Paper', meaningVi: 'Giấy', ipa: "/'peɪ.pə/", category: 'basic', imageSrc: new URL('../assets/Flashcard18.png', import.meta.url).href },
  { id: 19, word: 'Desk', meaningVi: 'Bàn học', ipa: '/desk/', category: 'basic', imageSrc: new URL('../assets/Flashcard19.png', import.meta.url).href },
  { id: 20, word: 'Chair', meaningVi: 'Ghế', ipa: "/tʃeər/", category: 'basic', imageSrc: new URL('../assets/Flashcard20.png', import.meta.url).href },
  { id: 21, word: 'Dictionary', meaningVi: 'Từ điển', ipa: "/'dɪk.ʃə.ner.i/", category: 'basic', imageSrc: new URL('../assets/Flashcard21.png', import.meta.url).href },
  { id: 22, word: 'Calculator', meaningVi: 'Máy tính', ipa: "/'kæl.kjə.leɪ.tʃə/", category: 'basic', imageSrc: new URL('../assets/Flashcard22.png', import.meta.url).href },
  { id: 23, word: 'Whiteboard', meaningVi: 'Bảng trắng', ipa: "/'waɪt.bɔ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard23.png', import.meta.url).href },
  { id: 24, word: 'Blackboard', meaningVi: 'Bảng đen', ipa: "/'blæk.bɔ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard24.png', import.meta.url).href },
  { id: 25, word: 'Chalk', meaningVi: 'Phấn', ipa: "/tʃɔ:k/", category: 'basic', imageSrc: new URL('../assets/Flashcard25.png', import.meta.url).href },
  { id: 26, word: 'Paper clip', meaningVi: 'Kẹp giấy', ipa: "/'peɪ.pə klɪp/", category: 'basic', imageSrc: new URL('../assets/Flashcard26.png', import.meta.url).href },
  { id: 27, word: 'Compass', meaningVi: 'Com-pa', ipa: "/'kʌm.pəs/", category: 'basic', imageSrc: new URL('../assets/Flashcard27.png', import.meta.url).href },
  { id: 28, word: 'Sticky note', meaningVi: 'Giấy ghi chú', ipa: "/'stɪk.i noʊt/", category: 'basic', imageSrc: new URL('../assets/Flashcard28.png', import.meta.url).href },
  { id: 29, word: 'Protractor', meaningVi: 'Thước đo độ', ipa: "/prə'træk.tə/", category: 'basic', imageSrc: new URL('../assets/Flashcard29.png', import.meta.url).href },
  { id: 30, word: 'Stapler', meaningVi: 'Dập ghim', ipa: "/'steɪ.plə/", category: 'basic', imageSrc: new URL('../assets/Flashcard30.png', import.meta.url).href },
  { id: 31, word: 'Bookmark', meaningVi: 'Thẻ đánh dấu sách', ipa: "/'bʊk.mɑ:rk/", category: 'basic', imageSrc: new URL('../assets/Flashcard31.png', import.meta.url).href },
  { id: 32, word: 'Binder', meaningVi: 'Bìa còng', ipa: "/'baɪn.dər/", category: 'basic', imageSrc: new URL('../assets/Flashcard32.png', import.meta.url).href },
  { id: 33, word: 'Correction tape', meaningVi: 'Băng xóa', ipa: "/kə'rek.ʃən teɪp/", category: 'basic', imageSrc: new URL('../assets/Flashcard33.png', import.meta.url).href },
  { id: 34, word: 'Textbook', meaningVi: 'Sách giáo khoa', ipa: "/'tekst.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard34.png', import.meta.url).href },
  { id: 35, word: 'Workbook', meaningVi: 'Sách bài tập', ipa: "/'wɜ:k.bʊk/", category: 'basic', imageSrc: new URL('../assets/Flashcard35.png', import.meta.url).href },
  { id: 36, word: 'Magnifying glass', meaningVi: 'Kính lúp', ipa: "/'mæɡ.nɪ.faɪ.ɪŋ ɡlɑ:s/", category: 'basic', imageSrc: new URL('../assets/Flashcard36.png', import.meta.url).href },
  { id: 37, word: 'Globe', meaningVi: 'Quả địa cầu', ipa: '/ɡloʊb/', category: 'basic', imageSrc: new URL('../assets/Flashcard37.png', import.meta.url).href },
  { id: 38, word: 'Tape', meaningVi: 'Cuộn băng keo', ipa: '/teɪp/', category: 'basic', imageSrc: new URL('../assets/Flashcard38.png', import.meta.url).href },
  { id: 39, word: 'Locker', meaningVi: 'Tủ đựng đồ', ipa: "/'lɑ:k.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard39.png', import.meta.url).href },
  { id: 40, word: 'Sticker', meaningVi: 'Hình dán', ipa: "/'stɪk.ə/", category: 'basic', imageSrc: new URL('../assets/Flashcard40.png', import.meta.url).href },
  { id: 41, word: 'Map', meaningVi: 'Bản đồ', ipa: '/mæp/', category: 'basic', imageSrc: new URL('../assets/Flashcard41.png', import.meta.url).href },
  { id: 42, word: 'Name tag', meaningVi: 'Thẻ tên', ipa: '/neɪm tæɡ/', category: 'basic', imageSrc: new URL('../assets/Flashcard42.png', import.meta.url).href },
  { id: 43, word: 'Correction Pen', meaningVi: 'Bút xóa nước', ipa: "/kə'rek.ʃən pen/", category: 'basic', imageSrc: new URL('../assets/Flashcard43.png', import.meta.url).href },
  { id: 44, word: 'Graph paper', meaningVi: "Giấy kẻ ô", ipa: "/ɡræf 'peɪ.pə/", category: 'basic', imageSrc: new URL('../assets/Flashcard44.png', import.meta.url).href },
  { id: 45, word: 'Flashcard', meaningVi: 'Thẻ học từ vựng', ipa: "/'flæʃ.kɑ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard45.png', import.meta.url).href },
{ id: 46, word: 'SOFA', meaningVi: 'Ghế Sô-fa', ipa: "/'soʊ.fə/", category: 'basic', imageSrc: new URL('../assets/Flashcard46.png', import.meta.url).href },
  { id: 47, word: 'ARMCHAIR', meaningVi: 'Ghế Bành', ipa: "/'ɑ:rm.tʃer/", category: 'basic', imageSrc: new URL('../assets/Flashcard47.png', import.meta.url).href },
  { id: 48, word: 'COFFEE TABLE', meaningVi: 'Bàn uống nước', ipa: "/'kɔ:.fi ˌteɪ.bəl/", category: 'basic', imageSrc: new URL('../assets/Flashcard48.png', import.meta.url).href },
  { id: 49, word: 'BOOKSHELF', meaningVi: 'Giá sách', ipa: "/'bʊk.ʃelf/", category: 'basic', imageSrc: new URL('../assets/Flashcard49.png', import.meta.url).href },
  { id: 50, word: 'CURTAIN', meaningVi: 'Rèm cửa', ipa: "/'kɜ:r.tən/", category: 'basic', imageSrc: new URL('../assets/Flashcard50.png', import.meta.url).href },
  { id: 51, word: 'TELEVISION', meaningVi: 'Tivi', ipa: "/'tel.ə.vɪʒ.ən/", category: 'basic', imageSrc: new URL('../assets/Flashcard51.png', import.meta.url).href },
  { id: 52, word: 'REMOTE CONTROL', meaningVi: 'Điều khiển từ xa', ipa: "/rɪ'moʊt kən'troʊl/", category: 'basic', imageSrc: new URL('../assets/Flashcard52.png', import.meta.url).href },
  { id: 53, word: 'CARPET', meaningVi: 'Thảm trải sàn', ipa: "/'kɑ:r.pɪt/", category: 'basic', imageSrc: new URL('../assets/Flashcard53.png', import.meta.url).href },
  { id: 54, word: 'VASE', meaningVi: 'Bình hoa', ipa: "/veɪs/", category: 'basic', imageSrc: new URL('../assets/Flashcard54.png', import.meta.url).href },
  { id: 55, word: 'PICTURE', meaningVi: 'Bức tranh', ipa: "/'pɪk.tʃɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard55.png', import.meta.url).href },
  { id: 56, word: 'REFRIGERATOR', meaningVi: 'Tủ lạnh', ipa: "/rɪ'frɪdʒ.ə.reɪ.tɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard56.png', import.meta.url).href },
  { id: 57, word: 'MICROWAVE', meaningVi: 'Lò vi sóng', ipa: "/'maɪ.kroʊ.weɪv/", category: 'basic', imageSrc: new URL('../assets/Flashcard57.png', import.meta.url).href },
  { id: 58, word: 'OVEN', meaningVi: 'Lò nướng', ipa: "/'ʌv.ən/", category: 'basic', imageSrc: new URL('../assets/Flashcard58.png', import.meta.url).href },
  { id: 59, word: 'STOVE', meaningVi: 'Bếp nấu', ipa: "/stoʊv/", category: 'basic', imageSrc: new URL('../assets/Flashcard59.png', import.meta.url).href },
  { id: 60, word: 'FRYING PAN', meaningVi: 'Chảo rán', ipa: "/'fraɪ.ɪŋ pæn/", category: 'basic', imageSrc: new URL('../assets/Flashcard60.png', import.meta.url).href },
  { id: 61, word: 'POT', meaningVi: 'Nồi', ipa: "/pɑ:t/", category: 'basic', imageSrc: new URL('../assets/Flashcard61.png', import.meta.url).href },
  { id: 62, word: 'KETTLE', meaningVi: 'Ấm đun nước', ipa: "/'ket.əl/", category: 'basic', imageSrc: new URL('../assets/Flashcard62.png', import.meta.url).href },
  { id: 63, word: 'CUTTING BOARD', meaningVi: 'Thớt', ipa: "/'kʌt.ɪŋ bɔ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard63.png', import.meta.url).href },
  { id: 64, word: 'SPOON', meaningVi: 'Thìa', ipa: "/spu:n/", category: 'basic', imageSrc: new URL('../assets/Flashcard64.png', import.meta.url).href },
  { id: 65, word: 'FORK', meaningVi: 'Dĩa/ nĩa', ipa: "/fɔ:rk/", category: 'basic', imageSrc: new URL('../assets/Flashcard65.png', import.meta.url).href },
  { id: 66, word: 'BED', meaningVi: 'Giường ngủ', ipa: "/bed/", category: 'basic', imageSrc: new URL('../assets/Flashcard66.png', import.meta.url).href },
  { id: 67, word: 'MATTRESS', meaningVi: 'Đệm', ipa: "/'mæt.rəs/", category: 'basic', imageSrc: new URL('../assets/Flashcard67.png', import.meta.url).href },
  { id: 68, word: 'PILLOW', meaningVi: 'Gối', ipa: "/'pɪl.oʊ/", category: 'basic', imageSrc: new URL('../assets/Flashcard68.png', import.meta.url).href },
  { id: 69, word: 'BLANKET', meaningVi: 'Chăn', ipa: "/'blæŋ.kɪt/", category: 'basic', imageSrc: new URL('../assets/Flashcard69.png', import.meta.url).href },
  { id: 70, word: 'WARDROBE', meaningVi: 'Tủ quần áo', ipa: "/'wɔ:r.droʊb/", category: 'basic', imageSrc: new URL('../assets/Flashcard70.png', import.meta.url).href },
  { id: 71, word: 'NIGHTSTAND', meaningVi: 'Tủ đầu giường', ipa: "/'naɪt.stænd/", category: 'basic', imageSrc: new URL('../assets/Flashcard71.png', import.meta.url).href },
  { id: 72, word: 'MIRROR', meaningVi: 'Gương', ipa: "/'mɪr.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard72.png', import.meta.url).href },
  { id: 73, word: 'ALARM CLOCK', meaningVi: 'Đồng hồ báo thức', ipa: "/ə'lɑ:rm ˌklɑ:k/", category: 'basic', imageSrc: new URL('../assets/Flashcard73.png', import.meta.url).href },
  { id: 74, word: 'HANGER', meaningVi: 'Móc treo quần áo', ipa: "/'hæŋ.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard74.png', import.meta.url).href },
  { id: 75, word: 'LAMP', meaningVi: 'Đèn ngủ', ipa: "/læmp/", category: 'basic', imageSrc: new URL('../assets/Flashcard75.png', import.meta.url).href },
  { id: 76, word: 'TOILET', meaningVi: 'Bồn cầu', ipa: "/'tɔɪ.lət/", category: 'basic', imageSrc: new URL('../assets/Flashcard76.png', import.meta.url).href },
  { id: 77, word: 'BATHTUB', meaningVi: 'Bồn tắm', ipa: "/'bæθ.tʌb/", category: 'basic', imageSrc: new URL('../assets/Flashcard77.png', import.meta.url).href },
  { id: 78, word: 'SHOWER', meaningVi: 'Vòi hoa sen', ipa: "/'ʃaʊ.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard78.png', import.meta.url).href },
  { id: 79, word: 'SINK', meaningVi: 'Bồn rửa mặt', ipa: "/sɪŋk/", category: 'basic', imageSrc: new URL('../assets/Flashcard79.png', import.meta.url).href },
  { id: 80, word: 'TOOTHBRUSH', meaningVi: 'Bàn chải đánh răng', ipa: "/'tu:θ.brʌʃ/", category: 'basic', imageSrc: new URL('../assets/Flashcard80.png', import.meta.url).href },
  { id: 81, word: 'TOOTHPASTE', meaningVi: 'Kem đánh răng', ipa: "/'tu:θ.peɪst/", category: 'basic', imageSrc: new URL('../assets/Flashcard81.png', import.meta.url).href },
  { id: 82, word: 'TOWEL', meaningVi: 'Khăn tắm', ipa: "/'taʊ.əl/", category: 'basic', imageSrc: new URL('../assets/Flashcard82.png', import.meta.url).href },
  { id: 83, word: 'TOWEL', meaningVi: 'Khăn tắm', ipa: "/'taʊ.əl/", category: 'basic', imageSrc: new URL('../assets/Flashcard83.png', import.meta.url).href },
  { id: 84, word: 'SOAP', meaningVi: 'Xà phòng', ipa: "/soʊp/", category: 'basic', imageSrc: new URL('../assets/Flashcard84.png', import.meta.url).href },
  { id: 85, word: 'SHAMPOO', meaningVi: 'Dầu gội', ipa: "/ʃæm'pu:/", category: 'basic', imageSrc: new URL('../assets/Flashcard85.png', import.meta.url).href },
  { id: 86, word: 'TRASH CAN', meaningVi: 'Thùng rác', ipa: "/'træʃ kæn/", category: 'basic', imageSrc: new URL('../assets/Flashcard86.png', import.meta.url).href },
  { id: 87, word: 'IRON', meaningVi: 'Bàn là/ bàn ủi', ipa: "/aɪən/", category: 'basic', imageSrc: new URL('../assets/Flashcard87.png', import.meta.url).href },
  { id: 88, word: 'MOUTHWASH', meaningVi: 'Nước súc miệng', ipa: "/'maʊθ.wɑ:ʃ/", category: 'basic', imageSrc: new URL('../assets/Flashcard88.png', import.meta.url).href },
  { id: 89, word: 'GLASS', meaningVi: 'Cốc thủy tinh', ipa: "/glæs/", category: 'basic', imageSrc: new URL('../assets/Flashcard89.png', import.meta.url).href },
  { id: 90, word: 'BOWL', meaningVi: 'Bát', ipa: "/boʊl/", category: 'basic', imageSrc: new URL('../assets/Flashcard90.png', import.meta.url).href },
  { id: 91, word: 'WASHING MACHINE', meaningVi: 'Máy giặt', ipa: "/'wɑ:ʃ.ɪŋ mə'ʃi:n/", category: 'basic', imageSrc: new URL('../assets/Flashcard91.png', import.meta.url).href },
  { id: 92, word: 'AIR CONDITIONER', meaningVi: 'Máy lạnh/ Điều hòa', ipa: "/'er kənˌdɪʃ.ən.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard92.png', import.meta.url).href },
  { id: 93, word: 'PLATE', meaningVi: 'Đĩa', ipa: "/pleɪt/", category: 'basic', imageSrc: new URL('../assets/Flashcard93.png', import.meta.url).href },
  { id: 94, word: 'CUP', meaningVi: 'Tách', ipa: "/kʌp/", category: 'basic', imageSrc: new URL('../assets/Flashcard94.png', import.meta.url).href },
  { id: 95, word: 'RICE COOKER', meaningVi: 'Nồi cơm điện', ipa: "/'raɪs 'kʊk.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard95.png', import.meta.url).href },
  { id: 96, word: 'CHOPSTICK', meaningVi: 'Đũa', ipa: "/'tʃɑ:p.stɪk/", category: 'basic', imageSrc: new URL('../assets/Flashcard96.png', import.meta.url).href },
  { id: 97, word: 'PAN', meaningVi: 'Chảo', ipa: "/pæn/", category: 'basic', imageSrc: new URL('../assets/Flashcard97.png', import.meta.url).href },
  { id: 98, word: 'STEAMER', meaningVi: 'Nồi hấp', ipa: "/'sti:m.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard98.png', import.meta.url).href },
  { id: 99, word: 'PRESSURE', meaningVi: 'Nồi áp suất', ipa: "/'preʃ.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard99.png', import.meta.url).href },
  { id: 100, word: 'APRON', meaningVi: 'Tạp dề', ipa: "/'eɪ.prən/", category: 'basic', imageSrc: new URL('../assets/Flashcard100.png', import.meta.url).href },
  { id: 101, word: 'SPATULA', meaningVi: 'Dụng cụ trộn bột', ipa: "/'spætʃ.ə.lə/", category: 'basic', imageSrc: new URL('../assets/Flashcard101.png', import.meta.url).href },
  { id: 102, word: 'CHOPPING BLOCK', meaningVi: 'Thớt', ipa: "/'tʃɑ:p.ɪŋ blɑ:k/", category: 'basic', imageSrc: new URL('../assets/Flashcard102.png', import.meta.url).href },
  { id: 103, word: 'DUSTER', meaningVi: 'Cái phũi bụi', ipa: "/'dʌs.tɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard103.png', import.meta.url).href },
  { id: 104, word: 'MOP', meaningVi: 'Chổi lau sàn', ipa: "/mɑ:p/", category: 'basic', imageSrc: new URL('../assets/Flashcard104.png', import.meta.url).href },
  { id: 105, word: 'RAZOR', meaningVi: 'Dao cạo râu', ipa: "/'reɪ.zɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard105.png', import.meta.url).href },
  { id: 106, word: 'TRASH BAG', meaningVi: 'Túi rác', ipa: "/'træʃ bæg/", category: 'basic', imageSrc: new URL('../assets/Flashcard106.png', import.meta.url).href },
  { id: 107, word: 'GRILL', meaningVi: 'Vỉ nướng', ipa: "/grɪl/", category: 'basic', imageSrc: new URL('../assets/Flashcard107.png', import.meta.url).href },
  { id: 108, word: 'TRAY', meaningVi: 'Cái khay, mâm', ipa: "/treɪ/", category: 'basic', imageSrc: new URL('../assets/Flashcard108.png', import.meta.url).href },
  { id: 109, word: 'SCOURING PAD', meaningVi: 'Miếng rửa bát', ipa: "/'skaʊ.rɪŋ pæd/", category: 'basic', imageSrc: new URL('../assets/Flashcard109.png', import.meta.url).href },
  { id: 110, word: 'DRYER', meaningVi: 'Máy sấy', ipa: "/'draɪ.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard110.png', import.meta.url).href },
  { id: 111, word: 'WASHING-UP LIQUID', meaningVi: 'Nước rửa bát', ipa: "/'wɑ:ʃ.ɪŋ.ʌp 'lɪk.wɪd/", category: 'basic', imageSrc: new URL('../assets/Flashcard111.png', import.meta.url).href },
  { id: 112, word: 'TONGS', meaningVi: 'Cái kẹp', ipa: "/tɑ:ŋz/", category: 'basic', imageSrc: new URL('../assets/Flashcard112.png', import.meta.url).href },
  { id: 113, word: 'JAR', meaningVi: 'Lọ thủy tinh', ipa: "/dʒɑ:r/", category: 'basic', imageSrc: new URL('../assets/Flashcard113.png', import.meta.url).href },
  { id: 114, word: 'ROLLING PIN', meaningVi: 'Cái cán bột', ipa: "/'roʊ.lɪŋ pɪn/", category: 'basic', imageSrc: new URL('../assets/Flashcard114.png', import.meta.url).href },
  { id: 115, word: 'BROOM', meaningVi: 'Chổi', ipa: "/bru:m/", category: 'basic', imageSrc: new URL('../assets/Flashcard115.png', import.meta.url).href },
  { id: 116, word: 'LIGHTER', meaningVi: 'Bật lửa', ipa: "/'laɪ.tɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard116.png', import.meta.url).href },
  { id: 117, word: 'WASHCLOTH', meaningVi: 'Khăn mặt', ipa: "/'wɑ:ʃ.klɒθ/", category: 'basic', imageSrc: new URL('../assets/Flashcard117.png', import.meta.url).href },
  { id: 118, word: 'VACUUM CLEANER', meaningVi: 'Máy hút bụi', ipa: "/'væk.ju:m 'kli:n.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard118.png', import.meta.url).href },
  { id: 119, word: 'COMB', meaningVi: 'Cái lược', ipa: "/koʊm/", category: 'basic', imageSrc: new URL('../assets/Flashcard119.png', import.meta.url).href },
  { id: 120, word: 'CLOCK', meaningVi: 'Đồng hồ', ipa: "/klɑ:k/", category: 'basic', imageSrc: new URL('../assets/Flashcard120.png', import.meta.url).href },
  { id: 121, word: 'BLENDER', meaningVi: 'Máy xay sinh tố', ipa: "/'blen.dɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard121.png', import.meta.url).href },
  { id: 122, word: 'PAPER TOWEL', meaningVi: 'Khăn giấy', ipa: "/'peɪ.pɚ 'taʊ.əl/", category: 'basic', imageSrc: new URL('../assets/Flashcard122.png', import.meta.url).href },
  { id: 123, word: 'SCALES', meaningVi: 'Cân', ipa: "/skeɪlz/", category: 'basic', imageSrc: new URL('../assets/Flashcard123.png', import.meta.url).href },
  { id: 124, word: 'CALENDAR', meaningVi: 'Lịch', ipa: "/'kæl.ən.dɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard124.png', import.meta.url).href },
  { id: 125, word: 'CHANDELIER', meaningVi: 'Đèn chùm', ipa: "/ˌʃæn.də'lɪr/", category: 'basic', imageSrc: new URL('../assets/Flashcard125.png', import.meta.url).href },
  { id: 126, word: 'EMBROIDERY', meaningVi: 'Tranh thêu', ipa: "/ɪm'brɔɪ.dɚ.i/", category: 'basic', imageSrc: new URL('../assets/Flashcard126.png', import.meta.url).href },
  { id: 127, word: 'FIREPLACE', meaningVi: 'Lò sưởi', ipa: "/'faɪr.pleɪs/", category: 'basic', imageSrc: new URL('../assets/Flashcard127.png', import.meta.url).href },
  { id: 128, word: 'FRAME', meaningVi: 'Khung ảnh', ipa: "/freɪm/", category: 'basic', imageSrc: new URL('../assets/Flashcard128.png', import.meta.url).href },
  { id: 129, word: 'TEA SET', meaningVi: 'Bộ tách trà', ipa: "/'ti: set/", category: 'basic', imageSrc: new URL('../assets/Flashcard129.png', import.meta.url).href },
  { id: 130, word: 'POSTER', meaningVi: 'Áp phích', ipa: "/'poʊ.stɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard130.png', import.meta.url).href },
  { id: 131, word: 'POTTERY', meaningVi: 'Lọ gốm', ipa: "/'pɑ:t.ɚ.i/", category: 'basic', imageSrc: new URL('../assets/Flashcard131.png', import.meta.url).href },
  { id: 132, word: 'WIND CHIMES', meaningVi: 'Chuông gió', ipa: "/'wɪnd tʃaɪmz/", category: 'basic', imageSrc: new URL('../assets/Flashcard132.png', import.meta.url).href },
  { id: 133, word: 'DESKTOP', meaningVi: 'Máy tính để bàn', ipa: "/'desk.tɑ:p/", category: 'basic', imageSrc: new URL('../assets/Flashcard133.png', import.meta.url).href },
  { id: 134, word: 'SPEAKER', meaningVi: 'Loa', ipa: "/'spi:k.ɚ/", category: 'basic', imageSrc: new URL('../assets/Flashcard134.png', import.meta.url).href },
  { id: 135, word: 'STATUE', meaningVi: 'Tượng', ipa: "/'stætʃ.u:/", category: 'basic', imageSrc: new URL('../assets/Flashcard135.png', import.meta.url).href },
  { id: 136, word: 'STEP', meaningVi: 'Bậc thang', ipa: "/step/", category: 'basic', imageSrc: new URL('../assets/Flashcard136.png', import.meta.url).href },
  { id: 137, word: 'BATHROOM', meaningVi: 'Phòng tắm', ipa: "/'bæθ.ru:m/", category: 'basic', imageSrc: new URL('../assets/Flashcard137.png', import.meta.url).href },
  { id: 138, word: 'LIVING ROOM', meaningVi: 'Phòng khách', ipa: "/'lɪv.ɪŋ ru:m/", category: 'basic', imageSrc: new URL('../assets/Flashcard138.png', import.meta.url).href },
  { id: 139, word: 'BEDROOM', meaningVi: 'Phòng ngủ', ipa: "/'bed.ru:m/", category: 'basic', imageSrc: new URL('../assets/Flashcard139.png', import.meta.url).href },
  { id: 140, word: 'TOILET', meaningVi: 'Nhà vệ sinh', ipa: "/'tɔɪ.lət/", category: 'basic', imageSrc: new URL('../assets/Flashcard140.png', import.meta.url).href },
  { id: 141, word: 'YARD', meaningVi: 'Sân', ipa: "/jɑ:rd/", category: 'basic', imageSrc: new URL('../assets/Flashcard141.png', import.meta.url).href },
  { id: 142, word: 'ATTIC', meaningVi: 'Phòng áp mái', ipa: "/'æt̬.ɪk/", category: 'basic', imageSrc: new URL('../assets/Flashcard142.png', import.meta.url).href },
  { id: 143, word: 'KITCHEN', meaningVi: 'Nhà bếp', ipa: "/'kɪtʃ.ən/", category: 'basic', imageSrc: new URL('../assets/Flashcard143.png', import.meta.url).href },
  { id: 144, word: 'GARDEN', meaningVi: 'Vườn', ipa: "/'gɑ:r.dən/", category: 'basic', imageSrc: new URL('../assets/Flashcard144.png', import.meta.url).href },
  { id: 145, word: 'GARAGE', meaningVi: 'Nhà để xe', ipa: "/gə'rɑ:ʒ/", category: 'basic', imageSrc: new URL('../assets/Flashcard145.png', import.meta.url).href },
  { id: 146, word: 'SHED', meaningVi: 'Nhà kho', ipa: "/ʃed/", category: 'basic', imageSrc: new URL('../assets/Flashcard146.png', import.meta.url).href }
]

export function getVocabById(id: string | undefined): VocabItem | undefined {
  if (!id) return undefined
  return VOCAB.find((v) => v.id.toString() === id)
}

export function getRandomVocab(exceptId?: string): VocabItem {
  if (VOCAB.length === 0) {
    throw new Error('VOCAB is empty')
  }

  if (!exceptId) return VOCAB[Math.floor(Math.random() * VOCAB.length)]
  const candidates = VOCAB.filter((v) => v.id.toString() !== exceptId)
  const list = candidates.length > 0 ? candidates : VOCAB
  return list[Math.floor(Math.random() * list.length)]
}
