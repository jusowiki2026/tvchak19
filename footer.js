function loadFooter() {
  const footerHTML = `
    <footer class="bg-white border-t border-gray-200 py-10 mt-auto">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="flex items-center space-x-2">
            <div class="bg-black text-white text-xs font-black tracking-widest px-2 py-1 rounded">
               <a href="index.html"><span class="text-sky-400">TV</span>CHACK</a>
            </div>
             <a href="index.html"><span class="font-extrabold text-gray-800 text-lg">티비착</span></a>
          </div>
          <nav class="flex flex-wrap justify-center space-x-6 text-sm font-medium text-gray-600">
            <a href="subscribe.html" class="hover:text-blue-600 transition-colors">구독방법</a>
            <a href="guide.html" class="hover:text-blue-600 transition-colors">가이드</a>
            <a href="content" class="hover:text-blue-600 transition-colors">콘텐츠</a>
            <a href="barogagi" class="hover:text-blue-600 transition-colors">바로가기</a>
          </nav>
        </div>
        <div class="mt-8 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
          <p>© 2026 TVCHACK All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
  
  const footerElem = document.getElementById('footer-include');
  if (footerElem) {
    footerElem.innerHTML = footerHTML;
  }
}

document.addEventListener('DOMContentLoaded', loadFooter);