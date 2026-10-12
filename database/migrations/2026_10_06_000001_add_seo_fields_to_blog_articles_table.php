<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('blog_articles', function (Blueprint $table) {
            $table->string('focus_keyword', 100)->nullable()->after('meta_description');
            $table->string('meta_keywords', 500)->nullable()->after('focus_keyword');
            $table->string('featured_image_alt')->nullable()->after('featured_image');
            $table->string('canonical_url', 500)->nullable()->after('meta_keywords');
            $table->boolean('noindex')->default(false)->after('canonical_url');
        });
    }

    public function down(): void
    {
        Schema::table('blog_articles', function (Blueprint $table) {
            $table->dropColumn(['focus_keyword', 'meta_keywords', 'featured_image_alt', 'canonical_url', 'noindex']);
        });
    }
};
