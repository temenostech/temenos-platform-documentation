SET PATH=%CD%\tools\docfx;%PATH%
REM docfx "%CD%\docfx_project\docfx.json" --build
docfx "%CD%\docfx_project\docfx.json" -t "%CD%\template\temenos" --build
