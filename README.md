# Nonal Sommelier - ノンアル・ソムリエ

## セットアップ手順

### 1. 依存関係のインストール
```bash
npm install
```

### 2. 環境変数の設定
`.env`ファイルを作成して以下を設定：
```
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### 3. ローカル開発
```bash
npm run dev
```

### 4. ビルド
```bash
npm run build
```

## Cloudflare Pagesへのデプロイ

1. GitHubにリポジトリを作成してpush
2. Cloudflare Pagesでリポジトリを連携
3. Build command: `npm run build`
4. Build output directory: `dist`
5. 環境変数にCONTENTFUL_SPACE_IDとCONTENTFUL_ACCESS_TOKENを設定
6. 
