# My ERC-20 Token Projesi  
![Solidity](https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&logo=solidity&logoColor=white) ![Hardhat](https://img.shields.io/badge/Hardhat-FFD43B?style=for-the-badge)  
Bu proje, Ethereum ağında çalışan basit bir ERC-20 tokenını dağıtmayı sağlar.

## 📌 Özellikler  
- ✅ Standart ERC-20 token fonksiyonları  
- 🏷️ Özelleştirilebilir token adı ve sembolü  
- 🧪 Hardhat ile yerel test ağı desteği  

## 🛠 Kurulum  

**Gereksinimler:**  
- Node.js (v18+)  
- npm (v9+)  

**Projeyi klonlayın:**  
```bash
git clone https://github.com/KULLANICI_ADINIZ/my-erc20-token.git  
cd my-erc20-token  
```

**Bağımlılıkları yükleyin:**  
```bash
npm install
```

## 🚀 Kullanım  

**Yerel Ağı Başlatın:**  
```bash
npx hardhat node
```

**Yeni bir terminalde token'ı dağıtın:**  
```bash
npx hardhat run scripts/deploy.js --network localhost
```

## 📄 Token Bilgileri  
- **Adı:** EFTOKEN  
- **Sembol:** EFT  
- **Toplam Arz:** 1,000,000 EFT  

## 📂 Proje Yapısı  
```
my-erc20-token/  
├── contracts/  
│   └── MyToken.sol  
├── scripts/  
│   └── deploy.js  
├── test/  
│   └── mytoken-test.js  
├── hardhat.config.js  
├── package.json  
└── README.md  
```

## 📬 İletişim  
Herhangi bir sorun ya da öneriniz varsa, lütfen bir [issue](https://github.com/KULLANICI_ADINIZ/my-erc20-token/issues) oluşturun.

---

**Not:** Bu proje sadece eğitim amaçlıdır. Gerçek ağda kullanmadan önce güvenlik denetimlerinden geçirmeniz önemlidir.
