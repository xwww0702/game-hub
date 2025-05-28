interface TrackData {
  event: string;            // 事件名
  userId?: string;          // 用户 ID
  page?: string;            // 页面路径
  [key: string]: any;       // 其他扩展字段
}

export function trackEvent(data: TrackData) {
  const payload = {
    ...data,
    page: data.page || window.location.pathname,
    timestamp: Date.now(),
    userAgent: navigator.userAgent,
  };

  // 推荐方式：可靠 + 异步，不阻塞跳转
  const blob = new Blob([JSON.stringify(payload)], {
    type: 'application/json',
  });

  navigator.sendBeacon("http://localhost:3001/api/track", blob);
}