module.exports = {
  apps: [
    {
      name: 'myblog-h5',//��Ŀ����
      cwd: "./",// ��ǰ����·��
      script: 'npm',// ʵ�������ű�
      args: "run start",//����
      autorestart: true,
      watch: true,// ��ر仯��Ŀ¼��һ���仯���Զ�����
      watch: [".nuxt", "nuxt.config.js"],// ��ر仯��Ŀ¼��һ���仯���Զ�����
      watch_delay: 1000,
      ignore_watch: ["node_modules"],// �Ӽ��Ŀ¼���ų�
      watch_options: {
        "followSymlinks": false,
        "usePolling": true,
      }
    }
  ],
};