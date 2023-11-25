Search.setIndex({"docnames": ["210411100047_PSD_Prediksi-Audio-Emosi", "210411100047_PSD_prediksi pycaret", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["210411100047_PSD_Prediksi-Audio-Emosi.ipynb", "210411100047_PSD_prediksi pycaret.ipynb", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["Analisis dan Prediksi pada Data Audio Emosi", "Analisis dan Prediksi pada dataset Heart failure clinical records Menggunakan Pycaret.", "Proyek Sains Data", "Markdown Files", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"nama": [0, 1, 2], "whinta": [0, 1, 2], "virginia": [0, 1, 2], "putri": [0, 1, 2], "nim": [0, 1, 2], "210411100047": [0, 1, 2], "ut": 0, "proyek": [0, 1], "sain": [0, 1], "import": [0, 1, 5], "numpi": [0, 1, 5], "np": [0, 5], "panda": [0, 1], "pd": [0, 1], "scipi": [0, 1], "stat": 0, "librosa": 0, "soundfil": 0, "sf": 0, "from": [0, 1, 5], "sklearn": 0, "model_select": 0, "train_test_split": 0, "neighbor": [0, 1], "kneighborsclassifi": 0, "metric": 0, "accuracy_scor": 0, "preprocess": [0, 1], "minmaxscal": 0, "joblib": [0, 1], "decomposit": 0, "matplotlib": [0, 1, 5], "pyplot": [0, 1, 5], "plt": [0, 1, 5], "request": [0, 1], "io": 0, "stringio": 0, "standardscal": 0, "pickl": [0, 1], "dump": [0, 1], "sklearnpca": 0, "math": [0, 5], "googl": 0, "colab": 0, "drive": 0, "os": 0, "file": [0, 1, 4], "mount": 0, "content": [0, 2, 3, 4], "keyboardinterrupt": 0, "traceback": 0, "most": [0, 3], "recent": 0, "call": [0, 3], "last": 0, "ipython": [0, 1], "input": [0, 1, 3], "2": [0, 1, 4], "69b1cfe94b47": 0, "cell": [0, 1], "line": [0, 3, 4, 5], "1": [0, 1, 5], "usr": [0, 1], "local": [0, 1], "lib": [0, 1], "python3": [0, 1], "10": [0, 1, 5], "dist": [0, 1], "packag": [0, 1], "py": [0, 1], "mountpoint": 0, "force_remount": 0, "timeout_m": 0, "readonli": 0, "101": 0, "def": 0, "fals": [0, 1], "120000": 0, "102": 0, "your": [0, 3, 4, 5], "specifi": 0, "path": [0, 4], "103": 0, "return": 0, "_mount": 0, "104": 0, "105": 0, "ephemer": 0, "130": [0, 1], "131": 0, "132": 0, "_messag": 0, "blocking_request": 0, "133": 0, "request_auth": 0, "authtyp": 0, "dfs_ephemer": 0, "timeout_sec": 0, "none": [0, 1], "134": [0, 1], "request_typ": 0, "parent": 0, "174": 0, "expect_repli": 0, "true": [0, 1], "175": 0, "176": 0, "read_reply_from_input": 0, "request_id": 0, "message_id": 0, "94": 0, "repli": 0, "_read_next_input_messag": 0, "95": [0, 1], "_not_readi": 0, "isinst": 0, "dict": 0, "96": [0, 1], "time": [0, 1], "sleep": 0, "0": [0, 1, 5], "025": 0, "97": 0, "continu": 0, "98": 0, "ada": [0, 1], "sekitar": 0, "200": 0, "kata": 0, "target": [0, 1], "yang": [0, 1, 2], "diucapkan": 0, "dalam": [0, 1, 2], "frase": 0, "pembawa": 0, "sai": 0, "word_": 0, "oleh": 0, "dua": [0, 1], "aktri": 0, "berusia": 0, "26": 0, "64": 0, "tahun": [0, 1], "rekaman": 0, "dibuat": [0, 1], "dari": [0, 1], "set": [0, 1], "tersebut": [0, 1], "menggambarkan": 0, "tujuh": 0, "marah": 0, "jijik": 0, "takut": 0, "bahagia": 0, "terkejut": 0, "menyenangkan": 0, "sedih": 0, "netral": 0, "terdapat": [0, 1], "total": [0, 1], "2800": 0, "titik": 0, "kumpulan": [0, 1], "ini": [0, 1, 2], "diatur": 0, "sedemikian": 0, "rupa": 0, "sehingga": [0, 1], "setiap": [0, 1], "perempuan": [0, 1], "mereka": [0, 1], "folder": 0, "tersendiri": 0, "di": [0, 1], "dalamnya": 0, "semua": [0, 1], "dapat": [0, 1, 2], "ditemukan": 0, "format": 0, "adalah": [0, 1, 2], "wav": 0, "berikut": [0, 1], "link": 0, "kaggl": 0, "http": [0, 1], "www": 0, "com": [0, 1], "ejlok1": 0, "toronto": 0, "emot": 0, "speech": 0, "tess": 0, "resourc": 0, "download": [0, 1], "11": [0, 1], "fitur": 0, "yaitu": [0, 1], "label": [0, 1], "mean": [0, 1, 5], "median": 0, "std_deviat": 0, "zero_crossing_r": 0, "energi": 0, "spectral_centroid": 0, "spectral_bandwidth": 0, "spectral_rolloff": 0, "chroma": 0, "mfcc": 0, "2191": 0, "kemudian": [0, 1], "simpan": [0, 1], "csv": [0, 1], "hasil": [0, 1, 2], "audio_featur": 0, "df": [0, 1], "read_csv": [0, 1], "raw": [0, 1], "githubusercont": [0, 1], "whintaaa": [0, 1], "datapsd": [0, 1], "main": [0, 1], "audio_fitur": 0, "audio_nam": 0, "disgust": 0, "yaf_chief_disgust": 0, "000022": 0, "000181": 0, "022747": 0, "232713": 0, "017588": 0, "3447": 0, "960816": 0, "2174": 0, "962231": 0, "5621": 0, "252553": 0, "391336": 0, "30": [0, 1], "599363": 0, "yaf_chain_disgust": 0, "000018": 0, "000350": 0, "020867": 0, "207239": 0, "015964": 0, "3139": 0, "689603": 0, "2052": 0, "783771": 0, "4998": 0, "484497": 0, "342745": 0, "325106": 0, "yaf_base_disgust": 0, "000021": 0, "000203": 0, "022053": 0, "246661": 0, "017039": 0, "3609": 0, "513207": 0, "2183": 0, "848242": 0, "5606": 0, "822791": 0, "348650": 0, "605677": 0, "3": [0, 1], "yaf_ditch_disgust": 0, "000024": 0, "000103": 0, "020262": 0, "196533": 0, "015652": 0, "3202": 0, "293486": 0, "2061": 0, "560496": 0, "5041": 0, "901634": 0, "365224": 0, "454414": 0, "4": [0, 1, 4, 5], "yaf_germ_disgust": 0, "000353": 0, "025729": 0, "192057": 0, "020146": 0, "2898": 0, "874228": 0, "1902": 0, "174869": 0, "4483": 0, "722888": 0, "321074": 0, "068130": 0, "2185": 0, "sad": 0, "oaf_wheat_sad": 0, "000033": 0, "000606": 0, "010872": 0, "086951": 0, "008632": 0, "1816": 0, "902526": 0, "2151": 0, "488369": 0, "3230": 0, "488327": 0, "252862": 0, "32": 0, "830270": 0, "2186": 0, "oaf_puff_sad": 0, "000010": 0, "000292": 0, "013971": 0, "078135": 0, "011377": 0, "1743": 0, "116982": 0, "2153": 0, "268985": 0, "3179": 0, "314108": 0, "375577": 0, "812740": 0, "2187": 0, "oaf_raise_sad": 0, "000001": 0, "000284": 0, "013523": 0, "086271": 0, "011093": 0, "1922": 0, "328544": 0, "2198": 0, "764520": 0, "3393": 0, "786621": 0, "297995": 0, "33": [0, 1], "027540": 0, "2188": 0, "oaf_sail_sad": 0, "000032": 0, "000330": 0, "010211": 0, "118340": 0, "008695": 0, "2245": 0, "346145": 0, "2210": 0, "531313": 0, "3846": 0, "132299": 0, "257481": 0, "356060": 0, "2189": 0, "oaf_rat_sad": 0, "000013": 0, "000459": 0, "010945": 0, "079590": 0, "009279": 0, "1725": 0, "299469": 0, "2012": 0, "117700": 0, "2973": 0, "918181": 0, "268717": 0, "213444": 0, "2190": 0, "row": [0, 1], "12": [0, 1], "column": [0, 1], "memisahkan": 0, "x": [0, 1], "y": [0, 1], "drop": [0, 1], "axi": [0, 1], "split": [0, 1], "train": [0, 1], "test": [0, 1], "x_train": 0, "x_test": 0, "y_train": 0, "y_test": 0, "random_st": [0, 1], "test_siz": 0, "defin": [0, 4], "fit": 0, "save": 0, "us": [0, 1, 3, 4], "scaler_file_path": 0, "r": 0, "my": 0, "prosaindata": 0, "tuga": [0, 1], "pkl": [0, 1], "open": [0, 1], "wb": [0, 1], "scaler_fil": 0, "x_train_scal": 0, "transform": [0, 1], "rb": [0, 1], "loadscal": 0, "load": [0, 1], "x_test_scal": 0, "arrai": [0, 5], "36438935": 0, "01864303": 0, "62951586": 0, "700305": 0, "54756458": 0, "50833751": 0, "4145327": 0, "16604988": 0, "48640237": 0, "96098207": 0, "94090678": 0, "60164653": 0, "54970173": 0, "37708373": 0, "00366902": 0, "23587569": 0, "06940957": 0, "06954893": 0, "47993707": 0, "22850376": 0, "05819755": 0, "90422257": 0, "30463648": 0, "36001778": 0, "80198861": 0, "0505326": 0, "00057672": 0, "02687033": 0, "90359502": 0, "22195475": 0, "63036712": 0, "86737544": 0, "17119103": 0, "01166204": 0, "94401292": 0, "46828321": 0, "confusion_matrix": 0, "acc": 0, "zero": 0, "n": [0, 1, 3, 5], "rang": [0, 5], "n_neighbor": 0, "euclidean": 0, "y_pred": 0, "predict": [0, 1, 3], "best_accuraci": 0, "max": [0, 1], "best_k": 0, "argmax": 0, "tampilkan": 0, "nilai": [0, 1], "print": [0, 1, 4], "769406392694064": 0, "9": [0, 1], "best_knn": 0, "x27": [0, 1], "In": [0, 1, 3], "jupyt": [0, 1, 3, 4, 5], "environ": [0, 1], "pleas": [0, 1], "rerun": [0, 1], "thi": [0, 1, 2, 3, 4, 5], "show": [0, 1, 3, 4], "html": [0, 1, 5], "represent": [0, 1], "trust": [0, 1], "notebook": [0, 1, 3], "On": [0, 1], "github": [0, 1], "unabl": [0, 1], "render": [0, 1, 3], "try": [0, 1], "page": [0, 1, 2, 3, 4], "nbviewer": [0, 1], "org": [0, 1, 3], "kneighborsclassifierkneighborsclassifi": 0, "best": 0, "model_file_path": 0, "model_fil": 0, "knn_model": 0, "load_knn": 0, "angri": 0, "fear": 0, "pleasantsurpris": 0, "neutral": 0, "happi": 0, "dtype": [0, 1], "object": [0, 1], "accuraci": [0, 1], "hitung": 0, "knn_predict": 0, "ke": [0, 1], "datafram": [0, 1], "knn_results_df": 0, "actual": 0, "tabel": 0, "353": 0, "1631": 0, "414": 0, "1827": 0, "851": 0, "1613": 0, "50": [0, 1], "453": 0, "1822": 0, "1233": 0, "438": 0, "lakukan": [0, 1], "sklearn_pca": 0, "n_compon": 0, "x_train_pca": 0, "fit_transform": 0, "princip": 0, "compon": [0, 1], "15699059": 0, "12088686": 0, "05816054": 0, "15522723": 0, "09174985": 0, "01146861": 0, "70852347": 0, "64630269": 0, "05224175": 0, "00458544": 0, "04659703": 0, "08161985": 0, "91065674": 0, "09092699": 0, "62907659": 0, "05744571": 0, "00876878": 0, "01138743": 0, "00230967": 0, "72522836": 0, "26887371": 0, "10442859": 0, "15861958": 0, "09644085": 0, "10754228": 0, "69602145": 0, "38281969": 0, "05710673": 0, "06719287": 0, "07069764": 0, "00722733": 0, "50821046": 0, "9109502": 0, "00369189": 0, "05388441": 0, "01722397": 0, "pca_model_file_path": 0, "pca10": 0, "pca_model_fil": 0, "pca_model": 0, "loadpca": 0, "x_test_pca": 0, "evalu": 0, "need": [0, 4], "acc_pca": 0, "knn_pca": 0, "y_pred_pca": 0, "best_accuracy_pca": 0, "best_k_pca": 0, "setelah": [0, 1], "knn_pca_predict": 0, "knn_pca_results_df": 0, "fungsi": [0, 1], "untuk": [0, 1, 2], "menghitung": [0, 1], "extract_featur": 0, "audio_path": 0, "sr": 0, "standard": 0, "deviat": 0, "std": [0, 1], "cross": 0, "rate": 0, "featur": [0, 1], "5": [0, 1, 5], "rm": 0, "6": [0, 1], "spectral": 0, "centroid": 0, "7": [0, 1], "bandwidth": 0, "8": [0, 1], "roll": 0, "off": [0, 3, 4], "chroma_stft": 0, "mel": 0, "frequenc": 0, "cepstral": 0, "coeffici": 0, "n_mfcc": 0, "13": [0, 1], "ekstraksi": 0, "unggah": 0, "statistiknya": 0, "uploaded_audio": 0, "upload": [0, 1], "list": 0, "kei": 0, "f": 0, "feature_nam": 0, "rolloff": 0, "i": [0, 1], "enumer": 0, "pastikan": 0, "sudah": [0, 1], "sebelumnya": 0, "datauji": 0, "reshap": 0, "datapca": 0, "make": [0, 5], "y_pred_uji": 0, "widget": [0, 1], "onli": 0, "avail": 0, "when": [0, 3, 4], "ha": 0, "been": 0, "execut": [0, 4], "current": 0, "browser": 0, "session": [0, 1], "enabl": 0, "oaf_bath_neutr": [], "028701242641546e": [], "06": [], "0005438459338620305": [], "01194076333194971": [], "09619660073138298": [], "010035553947091103": [], "2136": [], "114287964685": [], "2321": [], "7091544902114": [], "3862": [], "4610413896276": [], "306325763463974": [], "774452209472656": [], "18656179": [], "03217543": [], "04686929": [], "00256185": [], "05950545": [], "83797543": [], "90193552": [], "64365967": [], "05967935": [], "05331644": [], "16368289e": [], "00": 1, "18279955e": [], "01": 1, "60694693e": [], "87580696e": [], "15032998e": [], "29761803e": [], "02": [], "24581682e": [], "70910258e": [], "79700466e": [], "04": [], "52797971e": [], "base": [0, 1, 4], "439": 0, "userwarn": 0, "doe": 0, "have": [0, 4], "valid": 0, "name": [0, 1], "wa": 0, "warn": 0, "merupakan": 1, "berisi": 1, "catatan": 1, "medi": 1, "299": 1, "pasien": 1, "mengalami": 1, "gagal": 1, "jantung": 1, "dikumpulkan": 1, "selama": 1, "period": 1, "pemantauan": 1, "profil": 1, "dilengkapi": 1, "klini": 1, "mencerminkan": 1, "kondisi": 1, "kesehatan": [1, 2], "bawah": 1, "saya": 1, "akan": 1, "menjelaskan": [1, 2], "serta": 1, "tujuan": 2, "utamanya": 1, "jumlah": 1, "sampel": 1, "informasi": [0, 1, 2], "memiliki": 1, "mencakup": 1, "berbagai": [1, 2], "aspek": 1, "contoh": 1, "mungkin": 1, "termasuk": [1, 2], "tekanan": 1, "darah": 1, "kadar": 1, "serum": 1, "kreatinin": 1, "natrium": 1, "kalium": 1, "eject": 1, "fraction": 1, "fraksi": 1, "ejeksi": 1, "jeni": 1, "kelamin": 1, "lain": [0, 1], "sebagainya": 1, "utama": [0, 1], "antara": 1, "penelitian": 1, "digunakan": [0, 1], "menganalisi": [1, 2], "faktor": 1, "risiko": 1, "memahami": 2, "hubungan": 1, "b": 1, "pengembangan": 1, "prediktif": 1, "mengembangkan": 1, "memprediksi": 1, "kemungkinan": 1, "terjadinya": 1, "berdasarkan": [0, 1, 2], "hal": 1, "membantu": 1, "tenaga": 1, "melakukan": [0, 1], "tindakan": 1, "pencegahan": 1, "lebih": 1, "tepat": 1, "waktu": 1, "meningkatkan": 1, "pemahaman": [1, 2], "tentang": [1, 2], "metod": [0, 1, 2], "mendukung": [1, 2], "terkait": 1, "menjadi": 1, "dasar": 1, "pent": [1, 2], "menjalankan": [0, 1], "upaya": 1, "diagnosi": 1, "perawatan": 1, "penyakit": 1, "sebagai": 1, "usia": 1, "ag": 1, "memberikan": 1, "berapa": 1, "seringkali": 1, "menilai": [1, 2], "prognosi": 1, "anemia": 1, "anaemia": 1, "biner": 1, "menunjukkan": 1, "apakah": 1, "penurunan": 1, "sel": 1, "merah": 1, "atau": [0, 1, 2], "hemoglobin": 1, "kehadiran": 1, "sementara": 1, "ketiadaan": 1, "fosfokinas": 1, "cpk": 1, "tingkat": 1, "enzim": 1, "diukur": 1, "mikrogram": 1, "per": 1, "liter": 1, "mcg": 1, "l": 1, "indikasi": 1, "adanya": 1, "kerusakan": 1, "otot": 1, "jaringan": 1, "indik": 1, "penilaian": 1, "diabet": 1, "menderita": 1, "tidak": 1, "keberadaan": 1, "signifikan": 1, "perkembangan": 1, "persentas": 1, "meninggalkan": 1, "kontraksi": 1, "dinyatakan": 1, "ukuran": 1, "kemampuan": 1, "memompa": 1, "tinggi": 1, "high": 1, "blood": 1, "pressur": 1, "hipertensi": 1, "platelet": 1, "ribu": 1, "mililit": 1, "kiloplatelet": 1, "ml": 1, "berperan": 1, "pembekuan": 1, "membeku": 1, "sex": 1, "woman": 1, "laki": 1, "man": 1, "mengevaluasi": 1, "perbedaan": 1, "insiden": 1, "creatinin": 1, "miligram": 1, "desilit": 1, "mg": 1, "dl": 1, "produk": 1, "sisa": 1, "metabolism": 1, "ginjal": 1, "masalah": [1, 2], "mempengaruhi": 1, "sodium": 1, "miliequival": 1, "meq": 1, "elektrolit": 1, "tubuh": 1, "keseimbangan": 1, "merokok": 1, "smoke": 1, "kebiasaan": 1, "follow": [1, 3, 4], "up": 1, "satuan": 1, "hari": 1, "dai": 1, "mengukur": 1, "lamanya": 1, "dipantau": 1, "lanjutan": 1, "kejadian": 1, "kematian": 1, "death": 1, "event": 1, "sebuah": 1, "bersifat": 1, "boolean": 1, "berarti": 1, "nilainya": 1, "hanya": [1, 2], "berupa": 1, "benar": 1, "salah": 1, "jika": 1, "bahwa": [1, 2], "dicatat": 1, "sebaliknya": 1, "maka": 1, "masih": 1, "hidup": 1, "naive_bay": [], "gaussiannb": [], "decisiontreeclassifi": [], "ensembl": 1, "randomforestclassifi": 1, "svc": [], "linear_model": [], "logisticregress": [], "cross_val_scor": [], "gridsearchcv": [], "learning_curv": [], "precision_scor": [], "recall_scor": [], "f1_score": [], "langkah": [0, 1, 2], "baca": 1, "url": 1, "heart_failure_clinical_records_dataset": 1, "creatinine_phosphokinas": 1, "ejection_fract": 1, "high_blood_pressur": 1, "serum_creatinin": 1, "serum_sodium": 1, "death_ev": [], "75": 1, "582": 1, "20": 1, "265000": 1, "55": 1, "7861": 1, "38": 1, "263358": 1, "03": 1, "136": 1, "65": 1, "146": 1, "162000": 1, "129": 1, "111": 1, "210000": 1, "137": 1, "160": 1, "327000": 1, "116": 1, "294": 1, "62": 1, "61": 1, "155000": 1, "143": 1, "270": 1, "295": 1, "1820": 1, "270000": 1, "139": 1, "271": 1, "296": 1, "45": 1, "2060": 1, "60": 1, "742000": 1, "138": 1, "278": 1, "297": 1, "2413": 1, "140000": 1, "140": 1, "280": 1, "298": 1, "196": 1, "395000": 1, "285": 1, "normalisasi": [], "scaler": [], "prose": [0, 1], "mengubah": [0, 1], "skala": [0, 1], "seragam": [], "dibatasi": [], "rentang": [], "tertentu": 2, "skaler": [], "suatu": [1, 2], "algoritma": 1, "berguna": 1, "ketika": 1, "berbeda": 1, "beda": [], "performa": 1, "machin": 1, "learn": [0, 1], "secara": 1, "singkat": [], "melibatkan": [1, 2], "statistik": [1, 2], "seperti": [0, 1, 2], "rata": [0, 1], "standar": [0, 1], "deviasi": [0, 1], "minimum": [], "maksimum": [], "transformasi": [0, 1], "mengaplikasikan": [], "dihitung": [0, 1], "pengurangan": [], "pembagian": [], "hingga": 1, "bekerja": 0, "baik": [1, 2], "terutama": 1, "sensitif": 1, "terhadap": 1, "antar": 1, "numerik": 1, "dinormalisasi": 1, "pilih": 1, "kolom": 1, "perlu": 1, "numerical_column": 1, "bagi": [], "latih": [], "uji": [], "42": 1, "copi": [], "salin": [], "objek": 0, "kembali": [0, 1], "scalerr": [], "telah": 0, "disimpan": 0, "head": 1, "281": [], "746627": [], "005203": [], "149345": [], "265": [], "923675": [], "295341": [], "280697": [], "164": [], "341250": [], "973552": [], "710740": [], "581778": [], "480535": [], "77": 1, "591796": [], "502758": [], "247433": [], "322034": [], "094431": [], "058437": [], "490853": [], "808330": [], "760803": [], "289421": [], "582639": [], "334812": [], "070001": [], "771501": [], "270289": [], "188705": [], "250": 1, "240": [], "74": [], "gunakan": [], "mencari": [], "akurasi": [], "terbaik": [], "saat": [], "nantinya": 1, "naive_bayes_model": [], "nb_model_fil": [], "loaded_nb_model": [], "y_pred_nb": [], "accuracy_nb": [], "menampilkan": 1, "aktual": [], "nb_results_df": [], "93": [], "109": [], "173": [], "195": [], "184": [], "154": [], "57": [], "147": [], "108": [], "63": [], "155": [], "247": [], "46": [], "275": [], "213": [], "236": [], "17": 1, "239": [], "24": 1, "113": 1, "194": [], "92": [], "82": [], "118": 1, "76": [], "197": [], "210": [], "288": [], "219": [], "178": [], "144": [], "186": [], "84": [], "248": [], "277": [], "73": 1, "244": [], "25": 1, "209": 1, "59": [], "decision_tree_model": [], "dt_model_fil": [], "loaded_dt_model": [], "y_pred_dt": [], "accuracy_dt": [], "dt_results_df": [], "random_forest_model": [], "rf_model_fil": [], "loaded_rf_model": [], "y_pred_rf": [], "accuracy_rf": [], "rf_results_df": [], "7166666666666667": [], "svm_model": [], "svm_model_fil": [], "loaded_svm_model": [], "y_pred_svm": [], "accuracy_svm": [], "svm_results_df": [], "logistic_regression_model": [], "lr_model_fil": [], "loaded_lr_model": [], "y_pred_lr": [], "accuracy_lr": [], "lr_results_df": [], "_logist": [], "458": [], "convergencewarn": [], "lbfg": [], "fail": [], "converg": [], "statu": [], "stop": [], "NO": [], "iter": [], "reach": [], "limit": [], "increas": [], "number": 1, "max_it": [], "scale": [], "shown": [], "scikit": [0, 1], "stabl": [], "modul": 0, "also": [3, 4, 5], "refer": 3, "document": [3, 4, 5], "altern": [], "solver": [], "option": [], "n_iter_i": [], "_check_optimize_result": [], "k": 1, "nearest": [], "7666666666666667": [], "satu": 1, "umum": [0, 1, 2], "klasifikasi": 1, "meskipun": 1, "namanya": [], "mengandung": [], "istilah": [], "sebenarnya": [], "probabilita": [], "suks": [], "kegagalan": [], "peristiwa": [], "mengklasifikasikan": [], "kategori": 1, "kela": 1, "biasanya": 0, "dilab": [], "logistik": [], "sigmoid": [], "function": 3, "menghasilkan": [1, 2], "output": 4, "berada": [], "mengonversi": [], "linier": [], "kombinasi": [], "linear": 1, "pelatihan": [0, 1], "menentukan": 2, "paramet": [0, 1], "b_0": [], "b_1": [], "b_n": [], "meminimalkan": [], "sesungguhnya": [], "umumnya": 1, "dilakukan": [1, 2], "teknik": [0, 1, 2], "optimasi": 1, "gradien": [], "turun": [], "gradient": 1, "descent": [], "threshold": [], "dilatih": 0, "diubah": [], "diskrit": [], "besar": [0, 1], "diklasifikasikan": [], "minta": [], "pengguna": 1, "memasukkan": [], "float": 1, "masukkan": 1, "int": 1, "ya": 1, "phosphokinas": 1, "buat": [], "new_data_bol": [], "new_data_num": [], "new_data_sc": [], "new_data": 1, "berisiko": 1, "els": 1, "stdinnotimplementederror": [], "0e383ee64a1d": [], "ipykernel": 1, "kernelbas": [], "raw_input": [], "self": [], "prompt": 1, "846": [], "847": [], "_allow_stdin": [], "848": [], "rais": [], "849": [], "frontend": [], "support": 4, "850": [], "beberapa": 1, "librari": 1, "python": 1, "menyederhanakan": 1, "otomati": 1, "setup": 1, "pemilihan": 1, "hyperparamet": 1, "visualisasi": 1, "memungkinkan": [0, 1], "foku": 1, "inti": 1, "pemodelan": [1, 2], "tanpa": [0, 1], "menuli": 1, "banyak": [1, 2], "kode": [0, 1], "implementasi": [1, 2], "resiko": 1, "classif": 1, "identifi": 1, "correct": 1, "variabl": 1, "inisialisasi": 1, "ekperimen": 1, "exp": 1, "normal": 1, "normalize_method": 1, "zscore": [], "numeric_featur": 1, "bandingkan": 1, "cari": 1, "best_model": 1, "compare_model": 1, "modulenotfounderror": [], "8d7173f66650": [], "No": [], "note": 3, "If": 4, "due": [], "miss": 1, "you": [3, 4, 5], "can": [3, 4, 5], "manual": [], "instal": 1, "depend": 3, "either": [], "pip": 1, "apt": [], "To": [], "view": [], "exampl": [3, 5], "some": [3, 5], "common": [], "click": 1, "button": [], "below": [], "keluarga": [], "khususnya": [], "dikembangkan": [], "microsoft": [], "diken": [], "karena": 1, "kecepatan": [], "efisiensinya": [], "menangani": 1, "penjelasan": [], "gbm": [], "kerjanya": [], "pohon": 1, "keputusan": [1, 2], "decis": 1, "tree": 1, "membangun": 2, "menggabungkan": 1, "dibangun": [], "berurutan": [], "berusaha": [], "memperbaiki": [], "kesalahan": [], "dihasilkan": [], "konsep": [], "mana": 1, "ditrain": [], "keseluruhan": [], "diterapkan": 2, "bobot": [], "iterasi": [], "menyesuaikan": [], "kerugian": [], "loss": [], "leaf": [], "wise": [], "growth": [], "penggunaan": [], "pertumbuhan": [], "daun": [], "alih": [], "level": [], "lainnya": [], "pendekatan": 1, "menambahkan": 1, "pale": 1, "efisiensi": [], "informatif": [], "pemrosesan": [], "paralel": [], "distribusi": 1, "terdistribusi": [], "sumber": [], "daya": [], "komputasi": 2, "efisien": [], "mempercepat": [], "instanc": [], "melalui": 2, "dijumlahkan": [], "diakumulasi": [], "akhir": 1, "kemampuannya": [], "kategorik": 1, "sere": 1, "regresi": 1, "perankingan": [], "create_model": 1, "lightgbm": 1, "model_filenam": 1, "loaded_model": 1, "nbsp": 1, "auc": 1, "recal": 1, "prec": 1, "f1": 1, "kappa": 1, "mcc": 1, "fold": 1, "9524": 1, "9889": [], "8333": 1, "0000": 1, "9091": [], "8772": [], "8839": [], "8095": 1, "9444": [], "5000": 1, "7500": 1, "6000": 1, "4815": [], "4985": [], "9048": [], "8673": [], "8571": 1, "7857": [], "8469": [], "6667": 1, "6124": [], "7619": 1, "5714": 1, "6154": 1, "4444": 1, "4472": 1, "8750": 1, "9333": 1, "8966": 1, "9014": 1, "7959": [], "8000": [], "5385": [], "5534": [], "9286": [], "7143": 1, "4318": 1, "4346": 1, "8560": [], "8981": [], "7571": [], "7901": [], "7661": [], "6627": [], "6689": [], "0839": [], "0820": [], "1700": [], "1362": [], "1404": [], "1978": [], "1956": [], "membaca": 1, "diprediksi": 1, "membuat": [0, 1], "memuat": [0, 1], "load_model": 1, "predict_model": 1, "prediction_label": 1, "iloc": 1, "pipelin": 1, "successfulli": 1, "small": 3, "sampl": [1, 2, 5], "give": [], "feel": [], "how": 4, "structur": 3, "It": 3, "few": [], "major": [], "type": 1, "well": 5, "go": [], "depth": [], "ani": [1, 4], "particular": [], "topic": [], "check": [2, 5], "out": [2, 5], "more": [2, 4, 5], "inform": [4, 5], "bundl": 2, "see": [2, 3, 4, 5], "markdown": [], "myst": [], "whether": 3, "write": [3, 4], "book": [2, 3, 4, 5], "s": [1, 3, 4, 5], "ipynb": 3, "regular": 3, "md": [3, 4], "ll": 3, "same": 3, "flavor": 3, "simpl": [1, 3], "help": 3, "get": [3, 4], "start": [3, 4], "syntax": 3, "stand": 3, "markedli": 3, "text": [1, 3, 4], "slight": 3, "variat": 3, "commonmark": 3, "extens": [1, 3], "allow": 3, "sphinx": 3, "ecosystem": 3, "For": [3, 5], "about": [3, 4, 5], "overview": 3, "ar": [3, 4], "two": [3, 4], "power": 3, "tool": 3, "thei": 3, "kind": 3, "like": [3, 4], "written": [3, 4], "markup": 3, "languag": 3, "both": 3, "serv": 3, "similar": 3, "purpos": 3, "one": 3, "wherea": 3, "span": 3, "mani": [3, 4], "accept": 3, "differ": 3, "do": [3, 5], "those": 3, "specif": [1, 3], "being": 3, "here": [3, 5], "special": 3, "box": 3, "build": [1, 3], "an": 3, "inlin": [1, 3], "cite": 3, "store": [1, 3], "bibtex": 3, "holdgraf_evidence_2014": 3, "hdhpk14": 3, "moreov": 3, "insert": 3, "bibliographi": 3, "The": [3, 4], "must": 3, "all": [3, 4], "properli": 3, "bib": 3, "christoph": 3, "ramsai": 3, "holdgraf": 3, "wendi": 3, "de": 3, "heer": 3, "brian": 3, "paslei": 3, "robert": 3, "t": [3, 5], "knight": 3, "evid": 3, "code": [3, 4], "human": 3, "auditori": 3, "cortex": 3, "intern": 3, "confer": 3, "cognit": 3, "neurosci": 3, "brisban": 3, "australia": 3, "2014": 3, "frontier": 3, "just": 3, "starter": 3, "lot": [3, 5], "jupyterbook": 3, "let": 4, "detail": 4, "instruct": 4, "With": 4, "direct": 4, "so": 4, "built": [1, 4], "block": 4, "default": [1, 4], "kernel": [1, 4], "displai": 4, "rest": 4, "jupytext": 4, "convert": 4, "other": 4, "thing": 4, "understand": 4, "should": 4, "includ": [4, 5], "top": 4, "presenc": 4, "which": 4, "That": 4, "d": 4, "treat": 4, "run": 4, "command": 4, "init": 4, "markdownfil": 4, "creat": [1, 5], "As": 5, "emb": 5, "imag": 5, "etc": 5, "post": 5, "add_": 5, "begin": 5, "align": 5, "mbox": 5, "la_": 5, "tex": 5, "end": 5, "But": 5, "sure": 5, "escap": 5, "dollar": 5, "sign": 5, "want": 5, "keep": 5, "work": 5, "guid": 5, "rcparam": 5, "cycler": [1, 5], "ion": 5, "contextlib": 5, "exitstack": 5, "0x7b4b67a5f580": [], "fix": 5, "random": 5, "state": 5, "reproduc": 5, "seed": 5, "19680801": 5, "data": 5, "logspac": 5, "100": [1, 5], "randn": 5, "ii": 5, "cmap": 5, "cm": 5, "coolwarm": 5, "ax": [1, 5], "prop_cycl": 5, "color": [1, 5], "linspac": 5, "line2d": 5, "custom_lin": 5, "lw": 5, "fig": 5, "subplot": 5, "figsiz": [1, 5], "plot": [1, 5], "legend": [1, 5], "cold": 5, "medium": 5, "hot": 5, "There": 5, "interact": 5, "7333333333333333": [], "usaha": 2, "mengumpulkan": 2, "dan": 2, "menginterpretasi": 2, "dengan": 2, "mendapatkan": 2, "wawasan": 2, "pengambilan": [1, 2], "memecahkan": 2, "penerapan": 2, "matematika": 2, "mengeksplorasi": 2, "pola": 2, "tren": 2, "mendalam": 2, "ingin": [1, 2], "dipecahkan": 2, "pengumpulan": 2, "relevan": 2, "diperlukan": 2, "pembersihan": 2, "membersihkan": 2, "mempersiapkan": 2, "analisi": 2, "mengatasi": [1, 2], "hilang": [1, 2], "outlier": [1, 2], "eksplorasi": 2, "mengidentifikasi": 2, "diambil": [1, 2], "menerapkan": 2, "pembelajaran": 2, "mesin": 2, "model": 2, "meramalkan": 2, "fenomena": 2, "diamati": 2, "evaluasi": 2, "kinerja": 2, "memastikan": 2, "solusi": 2, "diusulkan": 2, "sesuai": [1, 2], "awal": 2, "rekomendasi": 2, "komunikasi": 2, "mengkomunikasikan": 2, "temuan": 2, "kepada": 2, "pemangku": 2, "kepentingan": 2, "laporan": 2, "presentasi": 2, "kontek": [0, 1, 2], "bisni": 2, "ilmu": 2, "pengetahuan": 2, "lagi": 2, "mencatat": 2, "bukan": 2, "alat": 2, "tetapi": [1, 2], "juga": [1, 2], "domain": 2, "bermakna": 2, "author": 2, "A": 2, "prediksi": 2, "pada": 2, "audio": 2, "emosi": 2, "dataset": 2, "heart": 2, "failur": 2, "clinic": 2, "record": 2, "menggunakan": [0, 2], "pycaret": 2, "0x7bf52a44b370": 5, "bertujuan": 1, "valu": 1, "dibawah": 1, "berjumlah": 1, "203": 1, "seimbang": 1, "process": 1, "menyeimbangkan": 1, "seaborn": 1, "sn": 1, "imblearn": 1, "over_sampl": 1, "randomoversampl": 1, "52f28334b535": [], "index": 1, "bertip": 1, "info": 1, "deskriptif": 1, "describ": 1, "missing_valu": 1, "isnul": 1, "sum": 1, "bari": 1, "pertama": [0, 1], "unik": 1, "target_count": 1, "value_count": 1, "korelasi": 1, "correlation_matrix": 1, "corr": 1, "umur": 1, "age_distribut": 1, "figur": 1, "15": 1, "countplot": 1, "titl": 1, "xlabel": 1, "ylabel": 1, "grafik": 1, "histplot": 1, "bin": 1, "kde": 1, "skyblu": 1, "frekuensi": 1, "scatterplot": 1, "hue": 1, "palett": 1, "viridi": 1, "loc": 1, "upper": 1, "right": 1, "femal": 1, "male": 1, "njumlah": 1, "statist": 1, "nstatistik": 1, "class": 1, "core": 1, "frame": 1, "rangeindex": 1, "entri": 1, "non": 1, "null": 1, "count": 1, "float64": 1, "int64": 1, "memori": 1, "usag": 1, "kb": 1, "size": 1, "1500x1000": 1, "000000": 1, "833893": 1, "431438": 1, "581": 1, "839465": 1, "418060": 1, "894809": 1, "496107": 1, "970": 1, "287881": 1, "494067": 1, "min": 1, "40": 1, "23": 1, "51": 1, "500000": 1, "70": 1, "083612": 1, "351171": 1, "029264": 1, "834841": 1, "478136": 1, "97804": 1, "236869": 1, "14": 1, "25100": 1, "212500": 1, "262000": 1, "303500": 1, "80": 1, "850000": 1, "00000": 1, "39388": 1, "625418": 1, "648829": 1, "32107": 1, "260870": 1, "03451": 1, "412477": 1, "46767": 1, "614208": 1, "50000": 1, "90000": 1, "10000": 1, "115": 1, "40000": 1, "148": 1, "melihat": 1, "mase": 1, "jumlah_death_event_1": 1, "shape": 1, "jumlah_death_event_0": 1, "bisa": 1, "dilihat": 1, "menandakan": 1, "minorita": 1, "rendah": 1, "dibandingkan": 1, "mayorita": 1, "agar": 1, "jumlahnya": 1, "seband": 1, "satunya": 1, "acak": 1, "ditambahkan": 1, "setara": 1, "identifikasi": 1, "pisahkan": 1, "terapkan": 1, "gabungkan": 1, "diresampl": 1, "lanjutkan": 1, "biasa": 1, "kita": [0, 1], "bertyp": 1, "x_resampl": 1, "y_resampl": 1, "fit_resampl": 1, "df_resampl": 1, "concat": 1, "z": 1, "score": 1, "variabel": [0, 1], "nol": 1, "menormalkan": 1, "sama": [0, 1], "langsung": 1, "mengurangkan": [0, 1], "membaginya": 1, "formula": 1, "frac": 1, "sangat": 1, "anda": [0, 1], "membandingkan": 1, "sebelum": 1, "mormalisasi": 1, "haru": [0, 1], "dipidahkan": 1, "diaktifkan": 1, "menormalisasi": 1, "ditentukan": 1, "lalu": 1, "membagi": [0, 1], "90": 1, "descript": 1, "id": 1, "8111": 1, "binari": 1, "origin": 1, "numer": 1, "imput": 1, "categor": 1, "mode": 1, "method": 1, "gener": 1, "stratifiedkfold": 1, "16": 1, "cpu": 1, "job": 1, "gpu": 1, "18": 1, "log": 1, "experi": 1, "19": 1, "clf": 1, "usi": 1, "2a34": 1, "tt": 1, "sec": 1, "8274": 1, "6500": 1, "8216": 1, "6962": 1, "5805": 1, "6064": 1, "4490": 1, "lr": 1, "logist": 1, "regress": 1, "8131": 1, "8522": 1, "6476": 1, "7370": 1, "6703": 1, "5442": 1, "5588": 1, "1340": 1, "ridg": 1, "0800": 1, "lda": 1, "discrimin": 1, "analysi": [0, 1], "8535": 1, "0660": 1, "gbc": 1, "boost": 1, "8129": 1, "8676": 1, "6762": 1, "7685": 1, "6904": 1, "5589": 1, "5808": 1, "1400": 1, "xgboost": 1, "extrem": 1, "7938": 1, "8795": 1, "6786": 1, "7238": 1, "6787": 1, "5290": 1, "5449": 1, "1310": 1, "light": 1, "8655": 1, "6643": 1, "7437": 1, "6740": 1, "5257": 1, "5457": 1, "2710": 1, "et": 1, "extra": 1, "7843": 1, "8326": 1, "4976": 1, "7825": 1, "5760": 1, "4448": 1, "4792": 1, "3380": 1, "7700": 1, "8135": 1, "5500": 1, "7420": 1, "5950": 1, "4430": 1, "4740": 1, "1260": 1, "dt": 1, "7650": 1, "7179": 1, "7023": 1, "5992": 1, "4397": 1, "4670": 1, "1620": 1, "nb": 1, "naiv": 1, "bay": 1, "7462": 1, "7793": 1, "4881": 1, "5337": 1, "3714": 1, "3930": 1, "1850": 1, "qda": 1, "quadrat": 1, "7367": 1, "7423": 1, "4429": 1, "6314": 1, "5058": 1, "3382": 1, "3544": 1, "0410": 1, "svm": 1, "7314": 1, "6214": 1, "5955": 1, "5924": 1, "3960": 1, "4105": 1, "1030": 1, "knn": 1, "7124": 1, "7169": 1, "2524": 1, "5750": 1, "3261": 1, "2046": 1, "2372": 1, "1880": 1, "dummi": 1, "6795": 1, "0360": 1, "bootstrap": 1, "ccp_alpha": 1, "class_weight": 1, "criterion": 1, "gini": 1, "max_depth": 1, "max_featur": 1, "sqrt": 1, "max_leaf_nod": 1, "max_sampl": 1, "min_impurity_decreas": 1, "min_samples_leaf": 1, "min_samples_split": 1, "min_weight_fraction_leaf": 1, "n_estim": 1, "n_job": 1, "oob_scor": 1, "verbos": 1, "warm_start": 1, "randomforestclassifierrandomforestclassifi": 1, "diata": 1, "ketahanan": 1, "overfit": 1, "pembuatan": 1, "terdiri": 1, "sejumlah": 1, "subset": 1, "fiturnya": 1, "penggantian": 1, "muncul": 1, "sekali": 1, "dipilih": 1, "tersedia": 1, "menciptakan": 1, "variasi": 1, "pemisahan": 1, "node": 1, "kriteria": 1, "impur": 1, "squar": 1, "error": 1, "vote": 1, "selesai": 1, "hasilnya": [0, 1], "terbanyak": 1, "dianggap": 1, "h_i": 1, "h": 1, "rumu": 1, "h_1": 1, "h_2": 1, "ldot": 1, "h_n": 1, "3333": 1, "4167": 1, "5130": 1, "9222": 1, "5882": 1, "6455": 1, "9796": 1, "8163": 1, "7692": 1, "6708": 1, "8776": 1, "5556": 1, "6250": 1, "4000": 1, "4082": 1, "7194": 1, "9231": 1, "8889": 1, "8944": 1, "8265": 1, "4286": 1, "5774": 1, "7976": 1, "0755": 1, "0826": 1, "1887": 1, "1730": 1, "1342": 1, "1758": 1, "1675": 1, "persiapkan": 1, "aggregasi": 1, "tentukan": 1, "itu": 1, "145000": 1, "psd": [0, 1], "app": [0, 1], "busi": [], "prepocess": [], "deploy": [], "berikan": 0, "tampaknya": 0, "pustaka": 0, "mari": 0, "baha": 0, "melatih": 0, "ulang": 0, "kali": 0, "program": 0, "sini": 0, "terakhir": 0, "dimuat": 0, "cara": 0, "mengurangi": 0, "dimensi": 0, "komplek": 0, "tetap": 0, "mempertahankan": 0, "sebagian": 0, "terkandung": 0, "mentransformasi": 0, "asli": 0, "ruang": 0, "baru": 0, "disebut": 0, "komponen": 0, "diurutkan": 0, "seberapa": 0, "variansinya": 0, "varian": 0, "diikuti": 0, "kedua": 0, "seterusnya": 0, "oaf_bite_disgust": 0, "2098407498560846e": 0, "05": 0, "000759080343414098": 0, "02309066243469715": 0, "10909799429086539": 0, "01691955141723156": 0, "2123": 0, "0714181321196": 0, "2208": 0, "9362323255236": 0, "3738": 0, "598867563101": 0, "36925455927848816": 0, "29": [0, 1], "30312156677246": 0, "09837685": 0, "32714865": 0, "59620418": 0, "77077837": 0, "70190759": 0, "85917477": 0, "08174241": 0, "77696305": 0, "57644537": 0, "13066898": 0, "48356266": 0, "39089473": 0, "6603022": 0, "33854531": 0, "50702673": 0, "25807244": 0, "38986447": 0, "08743024": 0, "08100064": 0, "0377777": 0, "streamlit": 0, "aplikasi": 0, "collect": 1, "py3": 1, "whl": 1, "484": 1, "25l": 1, "90m": 1, "0m": 1, "32m0": 1, "31m": 1, "eta": 1, "36m": 1, "2k": 1, "91m": 1, "32m112": 1, "31m3": 1, "mb": 1, "36m0": 1, "32m484": 1, "31m7": 1, "25h": 1, "categori": 1, "encod": 1, "category_encod": 1, "py2": 1, "81": 1, "32m81": 1, "31m11": 1, "25hrequir": 1, "alreadi": 1, "satisfi": 1, "cloudpickl": 1, "deprec": 1, "requir": 1, "imbalanc": 1, "importlib": 1, "metadata": 1, "34": 1, "ipywidget": 1, "jinja2": 1, "kaleido": 1, "manylinux1_x86_64": 1, "79": 1, "32m3": 1, "31m95": 1, "32m9": 1, "31m134": 1, "32m16": 1, "31m192": 1, "32m23": 1, "31m202": 1, "32m29": 1, "31m184": 1, "32m36": 1, "31m173": 1, "32m42": 1, "31m181": 1, "32m48": 1, "31m179": 1, "32m55": 1, "31m183": 1, "32m60": 1, "31m156": 1, "32m66": 1, "31m147": 1, "32m72": 1, "31m177": 1, "32m76": 1, "31m132": 1, "32m79": 1, "31m113": 1, "31m10": 1, "markupsaf": 1, "cp310": 1, "manylinux_2_17_x86_64": 1, "manylinux2014_x86_64": 1, "32m4": 1, "31m129": 1, "32m8": 1, "31m117": 1, "32m11": 1, "31m118": 1, "31m67": 1, "nbformat": 1, "numba": 1, "58": 1, "27": 1, "21": 1, "plotli": 1, "resampl": 1, "plotly_resampl": 1, "32m73": 1, "31m8": 1, "pmdarima": 1, "manylinux_2_28_x86_64": 1, "32m2": 1, "31m69": 1, "psutil": 1, "pyod": 1, "tar": 1, "gz": 1, "32m160": 1, "31m18": 1, "prepar": 1, "25hdone": 1, "31": 1, "schemdraw": 1, "106": 1, "32m106": 1, "31m12": 1, "scikit_plot": 1, "32m6": 1, "31m140": 1, "31m138": 1, "32m21": 1, "32m25": 1, "31m135": 1, "32m30": 1, "32m34": 1, "31m131": 1, "31m23": 1, "sktime": 1, "22": 1, "32m5": 1, "32m10": 1, "32m15": 1, "32m17": 1, "31m60": 1, "statsmodel": 1, "tbat": 1, "44": 1, "32m44": 1, "31m4": 1, "tqdm": 1, "66": 1, "xxhash": 1, "yellowbrick": 1, "wurlitz": 1, "patsi": 1, "threadpoolctl": 1, "zipp": 1, "setuptool": 1, "67": 1, "jedi": 1, "decor": 1, "pickleshar": 1, "traitlet": 1, "toolkit": 1, "41": 1, "pygment": 1, "backcal": 1, "pexpect": 1, "genutil": 1, "widgetsnbextens": 1, "jupyterlab": 1, "contourpi": 1, "fonttool": 1, "kiwisolv": 1, "pillow": 1, "pypars": 1, "dateutil": 1, "fastjsonschema": 1, "jsonschema": 1, "llvmlite": 1, "0dev0": 1, "pytz": 1, "2020": 1, "2023": 1, "post1": 1, "tenac": 1, "dash": 1, "31m141": 1, "31m139": 1, "31m71": 1, "orjson": 1, "32m138": 1, "trace": 1, "updat": 1, "trace_updat": 1, "185": 1, "32m185": 1, "31m17": 1, "tsdownsampl": 1, "31m89": 1, "cython": 1, "urllib3": 1, "six": 1, "charset": 1, "idna": 1, "certifi": 1, "2017": 1, "scikit_bas": 1, "119": 1, "32m119": 1, "31m15": 1, "flask": 1, "werkzeug": 1, "dash_html_compon": 1, "dash_core_compon": 1, "tabl": 1, "dash_tabl": 1, "retri": 1, "ansi2html": 1, "nest": 1, "asyncio": 1, "wrapt": 1, "client": 1, "tornado": 1, "parso": 1, "attr": 1, "referenc": 1, "28": 1, "rpd": 1, "ptyprocess": 1, "wcwidth": 1, "platformdir": 1, "itsdanger": 1, "pyzmq": 1, "argon2": 1, "cffi": 1, "nbconvert": 1, "send2trash": 1, "terminado": 1, "prometheu": 1, "nbclassic": 1, "server": 1, "shim": 1, "lxml": 1, "beautifulsoup4": 1, "bleach": 1, "defusedxml": 1, "entrypoint": 1, "mistun": 1, "nbclient": 1, "pandocfilt": 1, "tinycss2": 1, "bind": 1, "anyio": 1, "websocket": 1, "soupsiev": 1, "webencod": 1, "sniffio": 1, "exceptiongroup": 1, "pycpars": 1, "wheel": 1, "filenam": 1, "190289": 1, "sha256": 1, "0b0f5c6475af11da3c9719854ed8ab5b539954ee7a84c2e56c0e4b1734fe8a3a": 1, "directori": 1, "root": 1, "cach": 1, "1b": 1, "aa85b78c3c0c8871f4231e3f4a03bb23cecb7db829498380e": 1, "attempt": 1, "uninstal": 1, "found": 1, "exist": 1, "31merror": 1, "oper": 1, "cancel": 1, "user": 1, "merujuk": 1, "individu": 1, "prinsip": 1, "ensambel": 1, "cenderung": 1, "kasu": 1, "pilihan": 1, "robust": 1, "mampu": 1, "tunggal": 1, "interpret": 1, "seinterpretatif": 1, "pentingnya": 1, "handl": 1, "maupun": 1, "memerlukan": 1, "khusu": 1, "penyesuaian": 1, "terlalu": 1, "rumit": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"analisi": [0, 1], "dan": [0, 1], "prediksi": [0, 1], "pada": [0, 1], "data": [0, 1, 2], "audio": 0, "emosi": 0, "deskripsi": [0, 1], "dataset": [0, 1], "process": 0, "normalisasi": [0, 1], "scaler": 0, "mencari": [0, 1], "k": 0, "terbaik": [0, 1], "dengan": [0, 1], "akurasi": 0, "pale": 0, "tinggi": 0, "menyimpan": [0, 1], "model": [0, 1], "knn": 0, "reduksi": 0, "pca": 0, "heart": 1, "failur": 1, "clinic": 1, "record": 1, "menggunakan": 1, "beberapa": [], "preprocess": [], "naiv": [], "bay": [], "decis": [], "tree": [], "random": 1, "forest": 1, "svm": [], "logist": [], "regress": [], "baru": 1, "trebaik": [], "yaitu": [], "cara": 1, "kerja": 1, "pycaret": 1, "light": [], "gradient": [], "boost": [], "machin": [], "lgbm": [], "death_ev": 1, "welcom": [], "your": [], "jupyt": [], "book": [], "markdown": [3, 4, 5], "file": 3, "what": 3, "myst": [3, 4, 5], "sampl": 3, "role": 3, "direct": 3, "citat": 3, "learn": 3, "more": 3, "notebook": [4, 5], "an": 4, "exampl": 4, "cell": 4, "creat": 4, "quickli": 4, "add": 4, "yaml": 4, "metadata": 4, "content": 5, "code": 5, "block": 5, "output": 5, "proyek": 2, "sain": 2, "busi": 1, "understand": 1, "tujuan": 1, "memahami": 1, "penjelasan": 1, "fitur": 1, "eksplorasi": 1, "satistik": 1, "prepocess": 1, "oversampl": 1, "zscore": 1, "evaluasi": [0, 1], "classifi": 1, "rf": 1, "untuk": [], "klasifikasi": [], "contoh": [], "kode": [], "deploy": [0, 1], "link": 1, "streamlit": 1, "aplikasi": 1, "pre": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})