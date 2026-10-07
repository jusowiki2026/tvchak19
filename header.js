function loadHeader() {
  const headerHTML = `
    <header class="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <a href="index.html">
			<div class="bg-black text-white text-xs font-black tracking-widest px-2.5 py-1.5 rounded-lg flex items-center shadow-sm">
              <span class="text-sky-400 mr-1">TV</span>tvchak
            </div>
			</a>
             <a href="index.html"><span class="text-xl font-extrabold text-gray-900 tracking-tight">티비착</span></a>
          </div>
          <nav class="hidden md:flex space-x-8 text-sm font-bold text-gray-800">
            <a href="subscribe.html" class="hover:text-blue-600 transition-colors py-2">구독방법</a>
            <a href="guide.html" class="hover:text-blue-600 transition-colors py-2">가이드</a>
            <a href="content.html" class="hover:text-blue-600 transition-colors py-2">명대사</a>
            <a href="barogagi.html" class="hover:text-blue-600 transition-colors py-2">명장면</a>
          </nav>
          <div class="md:hidden flex items-center">
            <button id="mobile-menu-btn" class="text-gray-700 hover:text-black focus:outline-none p-2 rounded-md">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-gray-100 px-4 pt-2 pb-4 space-y-2 text-sm font-semibold text-gray-700">
        <a href="subscribe.html" class="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-600">구독방법</a>
        <a href="guide.html" class="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-600">가이드</a>
        <a href="content" class="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-600">명대사 모음</a>
        <a href="barogagi" class="block px-3 py-2 rounded-md hover:bg-gray-50 hover:text-blue-600">명장면 모음</a>
      </div>
    </header>
  `;
  
  const headerElem = document.getElementById('header-include');
  if (headerElem) {
    headerElem.innerHTML = headerHTML;
    
    // 모바일 메뉴 토글 이벤트 바인딩
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', loadHeader);
