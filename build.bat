SET PATH=%CD%\tools\docfx;D:\Tools\wkhtmltopdf\bin;%PATH%
docfx "%CD%\docfx_project\docfx.json" -t "%CD%\docfx_project\template\temenos" --build
REM docfx ".\docfx_project\docfx.json" --build --port 9090